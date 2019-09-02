exports.up = async function(knex) {
  const enrollments = await knex
    .select(
      "order_id",
      "bling_order_id",
      "course_id",
      "user_id",
      "active",
      "id"
    )
    .from("enrollment")
    .orderBy("last_access", "desc");

  const unique_enrollments = await knex
    .select("user_id", "course_id")
    .from("enrollment")
    .groupBy("user_id", "course_id");

  const unique_enrollments_rows = unique_enrollments.map(enrollment => {
    const enrollment_rows = enrollments.filter(
      _enrollment =>
        _enrollment.user_id === enrollment.user_id &&
        _enrollment.course_id === enrollment.course_id
    );

    const active_enrollment_row = enrollment_rows
      .filter(enroll => enroll.active)
      .pop();

    if (active_enrollment_row) {
      enrollment_rows.map(async _enrollment_row => {
        if (_enrollment_row.id != active_enrollment_row.id) {
          await knex("enrollment_module")
            .del()
            .where("enrollment_id", "=", _enrollment_row.id);
          await knex("enrollment")
            .del()
            .where("id", "=", _enrollment_row.id);
        }
      });
      return active_enrollment_row;
    } else {
      return enrollment_rows.pop();
    }
  });

  let enrollment_orders = [];
  const orders = enrollments.map((enrollment, idx) => {
    const foreign_enrollment = unique_enrollments_rows
      .filter(
        _enrollment =>
          _enrollment.user_id === enrollment.user_id &&
          _enrollment.course_id === enrollment.course_id
      )
      .pop();
    enrollment_orders.push({
      enrollment_id: foreign_enrollment.id,
      order_id: idx + 1
    });
    return {
      woo_order_id: enrollment.order_id,
      bling_order_id: enrollment.bling_order_id,
      active: enrollment.active
    };
  });

  await knex("order").insert(orders);
  await knex("enrollment_order").insert(enrollment_orders);
};

exports.down = async function(knex) {
  let new_enrollments = [];

  const enrollments = await knex("enrollment")
    .join("enrollment_order", "enrollment.id", "enrollment_order.enrollment_id")
    .join("order", "order.id", "enrollment_order.order_id");

  const unique_enrollments = await knex("enrollment");

  const enrollments_handler = await enrollments.map(async enrollment => {
    if (
      !enrollment.active &&
      (await knex
        .select("bling_order_id")
        .from("enrollment")
        .where("id", "=", enrollment.enrollment_id)).pop().bling_order_id
    ) {
      new_enrollments.push({
        user_id: enrollment.user_id,
        course_id: enrollment.course_id,
        last_access: enrollment.last_access,
        bling_order_id: enrollment.bling_order_id,
        order_id: enrollment.woo_order_id,
        start: enrollment.start,
        end: enrollment.end,
        active: enrollment.active
      });
    } else {
      await knex("enrollment")
        .where("id", "=", enrollment.enrollment_id)
        .update({
          bling_order_id: enrollment.bling_order_id,
          order_id: enrollment.woo_order_id
        });
    }
  });
  await Promise.all(enrollments_handler);

  await knex("enrollment").insert(new_enrollments);
};
