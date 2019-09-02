exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  await knex("exam_question").del();
  await knex("course_subject").del();
  await knex("enrollment_module").del();
  await knex("order").del();
  await knex("note").del();
  await knex("lesson").del();
  await knex("subject").del();
  await knex("student").del();
  await knex("login").del();
  await knex("staff").del();
  await knex("enrollment").del();
  await knex("professor").del();
  await knex("staff").del();
  await knex("user").del();
  await knex("master_lesson").del();
  await knex("course_module").del();
  await knex("module").del();
  await knex("exam").del();
  await knex("question").update({ correct_alternative_id: null });
  await knex("alternative").del();
  await knex("question").del();
  await knex("questionnaire").del();
  await knex("course").del();
  await knex("speaker").del();
  await knex("video").del();
  await knex("resource").del();
  await knex("repository").del();
  await knex("user").del();

  // Inserts seed entries

  const resourceIds = await knex("resource")
    .insert([
      {
        key: "imgs/marcelo.jpeg"
      },
      {
        key: "imgs/gabriel.jpeg"
      },
      {
        key: "imgs/kaique.jpeg"
      },
      {
        key: "imgs/icons/aulas-especiais.png"
      },
      {
        key: "imgs/icons/direito-ambiental.png"
      },
      {
        key: "imgs/icons/direito-administrativo.png"
      }
    ])
    .returning("id");

  const userIds = await knex("user")
    .insert([
      {
        name: "Kaique",
        lastname: "Lupo",
        email: "admin@newlaw.com.br",
        password:
          "$2b$10$tKxYMPno4jCcOIH0E43cs.MeCZj7OTVASjQudMF8NECEs0yo2qO9S", // encrypted password for "123"
        cpf: "14779368073",
        cellphone: "(16)98985-5689",
        otherphone: "(16)33225-2564",
        active: true,
        resource_id: resourceIds[2],
        zendesk_id: "380103647112"
      },
      {
        name: "Erik",
        lastname: "Navarro",
        email: "erik@newlaw.com.br",
        password:
          "$2b$10$tKxYMPno4jCcOIH0E43cs.MeCZj7OTVASjQudMF8NECEs0yo2qO9S", // encrypted password for "123"
        cpf: "14779368073",
        active: true,
        resource_id: resourceIds[0]
      },
      {
        name: "Gabriel",
        lastname: "Giancristofaro",
        email: "gabriel@cursoenfase.com.br",
        password:
          "$2b$10$tKxYMPno4jCcOIH0E43cs.MeCZj7OTVASjQudMF8NECEs0yo2qO9S", // encrypted password for "123"
        cpf: "14779368073",
        active: true,
        resource_id: resourceIds[0]
      },
      {
        name: "Kaique",
        lastname: "Lupo Leite",
        email: "kaique@cursoenfase.com.br",
        password:
          "$2b$10$tKxYMPno4jCcOIH0E43cs.MeCZj7OTVASjQudMF8NECEs0yo2qO9S", // encrypted password for "123"
        cpf: "14779368073",
        active: true,
        resource_id: resourceIds[0]
      },
      {
        name: "Victor",
        lastname: "Heclis",
        email: "victor.heclis@cursoenfase.com.br",
        password:
          "$2b$10$tKxYMPno4jCcOIH0E43cs.MeCZj7OTVASjQudMF8NECEs0yo2qO9S", // encrypted password for "123"
        cpf: "14779368073",
        active: true,
        resource_id: resourceIds[0]
      },
      {
        name: "Marcelo",
        lastname: "Diani",
        email: "marcelo.diani@cursoenfase.com.br",
        password:
          "$2b$10$tKxYMPno4jCcOIH0E43cs.MeCZj7OTVASjQudMF8NECEs0yo2qO9S", // encrypted password for "123"
        cpf: "14779368073",
        active: true,
        resource_id: resourceIds[0]
      },
      {
        name: "Dave",
        lastname: "Jesus",
        email: "dave@cursoenfase.com.br",
        password:
          "$2b$10$tKxYMPno4jCcOIH0E43cs.MeCZj7OTVASjQudMF8NECEs0yo2qO9S", // encrypted password for "123"
        cpf: "14779368073",
        active: true,
        resource_id: resourceIds[0]
      }
    ])
    .returning("id");

  await knex("student").insert([
    {
      user_id: userIds[0]
    },
    {
      user_id: userIds[3]
    },
    {
      user_id: userIds[4]
    },
    {
      user_id: userIds[5]
    },
    {
      user_id: userIds[6]
    }
  ]);

  const courseIds = await knex("course")
    .insert([
      {
        name: "Direito Penal, Anticorrupção e Compliance",
        description:
          "Pós-graduação em Direito Penal, Anticorrupção e Compliance",
        product_id: "1285"
      },
      {
        name: "Processo, Negociação e Arbitragem",
        description: "Pós-graduação em Processo, Negociação e Arbitragem",
        product_id: "1129"
      },
      {
        name: "Direito Público, GovTech e RegTech",
        description: "Pós-graduação em Direito Público, GovTech e RegTech",
        product_id: "332"
      }
    ])
    .returning("id");

  const enrollmentIds = await knex("enrollment")
    .insert([
      {
        course_id: courseIds[0],
        user_id: userIds[0],
        start_trial: "2019-04-03",
        end_trial: "2019-10-03"
      },
      {
        course_id: courseIds[0],
        user_id: userIds[1],
        start_trial: "2019-04-03",
        end_trial: "2019-10-03"
      },
      {
        course_id: courseIds[0],
        user_id: userIds[2],
        start_trial: "2019-04-03",
        end_trial: "2019-10-03"
      },
      {
        course_id: courseIds[0],
        user_id: userIds[3],
        start_trial: "2019-04-03",
        end_trial: "2019-10-03"
      },
      {
        course_id: courseIds[0],
        user_id: userIds[4],
        start_trial: "2019-04-03",
        end_trial: "2019-10-03"
      },

      {
        course_id: courseIds[0],
        user_id: userIds[5],
        start_trial: "2019-04-03",
        end_trial: "2019-10-03"
      },
      {
        course_id: courseIds[1],
        user_id: userIds[0],
        start_trial: "2019-04-02",
        end_trial: "2019-11-03"
      },
      {
        course_id: courseIds[0],
        user_id: userIds[3],
        start_trial: "2019-04-03",
        end_trial: "2019-10-03"
      },
      {
        course_id: courseIds[1],
        user_id: userIds[3],
        start_trial: "2019-04-03",
        end_trial: "2019-10-03"
      },
      {
        course_id: courseIds[0],
        user_id: userIds[4],
        start_trial: "2019-04-02",
        end_trial: "2019-11-03"
      },
      {
        course_id: courseIds[0],
        user_id: userIds[5],
        start_trial: "2019-04-02",
        end_trial: "2019-11-03"
      }
    ])
    .returning("id");

  const orderIds = await knex("order")
    .insert([
      {
        woo_order_id: "1111111",
        bling_order_id: "1111111b"
      },
      {
        woo_order_id: "2222222",
        bling_order_id: "222222222b"
      },
      {
        woo_order_id: "3333333",
        bling_order_id: "33333333b"
      },
      {
        woo_order_id: "34444444",
        bling_order_id: "34444444b",
        active: false
      },
      {
        woo_order_id: "55555",
        bling_order_id: "55555"
      }
    ])
    .returning("id");

  const enrollmentOrderIds = await knex("enrollment_order")
    .insert([
      { enrollment_id: enrollmentIds[0], order_id: orderIds[0] },
      { enrollment_id: enrollmentIds[0], order_id: orderIds[1] },
      { enrollment_id: enrollmentIds[2], order_id: orderIds[2] },
      { enrollment_id: enrollmentIds[3], order_id: orderIds[3] },
      { enrollment_id: enrollmentIds[5], order_id: orderIds[4] }
    ])
    .returning("id");

  const questionnaireIds = await knex("questionnaire")
    .insert([
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true }
    ])
    .returning("id");

  const moduleIds = await knex("module")
    .insert([
      {
        name: "Módulo 1",
        number: 1
      },
      {
        name: "Módulo 2",
        number: 2
      },
      {
        name: "Módulo 3",
        number: 3
      },
      {
        name: "Módulo 4",
        number: 4
      },
      {
        name: "Módulo 5",
        number: 5
      },
      {
        name: "Módulo 6",
        number: 6
      }
    ])
    .returning("id");

  const examIds = await knex("exam")
    .insert([
      { questionnaire_id: questionnaireIds[2], description: "Avaliação 2" },
      { questionnaire_id: questionnaireIds[3], description: "Avaliação 3" },
      { questionnaire_id: questionnaireIds[4], description: "Avaliação 4" },
      { questionnaire_id: questionnaireIds[5], description: "Avaliação 5" }
    ])
    .returning("id");

  await knex("course_module").insert([
    {
      course_id: courseIds[0],
      module_id: moduleIds[0],
      availability_date: "2019-05-01",
      order: 0
    },
    {
      course_id: courseIds[1],
      module_id: moduleIds[0],
      availability_date: "2019-05-01",
      order: 0
    },
    {
      course_id: courseIds[0],
      module_id: moduleIds[1],
      availability_date: "2019-05-01",
      order: 1
    },
    {
      course_id: courseIds[0],
      module_id: moduleIds[2],
      availability_date: "2019-05-01",
      order: 2
    },
    {
      course_id: courseIds[0],
      module_id: moduleIds[3],
      availability_date: "2019-05-01",
      order: 3
    },
    {
      course_id: courseIds[0],
      module_id: moduleIds[4],
      availability_date: "2019-05-01",
      order: 4
    },
    {
      course_id: courseIds[0],
      module_id: moduleIds[5],
      availability_date: "2019-06-01",
      order: 5
    }
  ]);

  const speakerIds = await knex("speaker")
    .insert([
      {
        name: "Marcelo Diani",
        description: "Diretor do Arruma Meu Computador",
        resource_id: resourceIds[0],
        occupation: "Especialista em Festa no Banana"
      },
      {
        name: "Gabriel Tanquinho",
        description: "Diretor da Tanquinho SA",
        resource_id: resourceIds[1]
      },
      {
        name: "Kaique Sedan",
        description: "Diretor da Sedan SA",
        resource_id: resourceIds[2]
      }
    ])
    .returning("id");

  const videoIds = await knex("video")
    .insert([
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 },
      { external_id: "2382213e2fc040b0c6e2d68282ff9e56", duration: 911 }
    ])
    .returning("id");

  const subjectIds = await knex("subject")
    .insert([
      {
        name: "As tecnologias motoras da Quarta Revolução Industrial",
        module_id: moduleIds[0],
        questionnaire_id: questionnaireIds[0],
        resource_id: resourceIds[4],
        section_id: "",
        topic_id: "1000",
        video_id: videoIds[50],
        order: 1,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name:
          "Updating Lawyering: múltiplas habilidades para jurista do futuro",
        module_id: moduleIds[0],
        questionnaire_id: questionnaireIds[1],
        resource_id: resourceIds[5],
        section_id: null,
        video_id: videoIds[51],
        order: 2,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Law and Economics",
        module_id: moduleIds[1],
        questionnaire_id: questionnaireIds[2],
        resource_id: resourceIds[3],
        section_id: "360004154392",
        video_id: videoIds[52],
        order: 0,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Negociação",
        module_id: moduleIds[1],
        questionnaire_id: questionnaireIds[3],
        resource_id: resourceIds[3],
        section_id: "360004154392",
        order: 1,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Direito como Negócio",
        module_id: moduleIds[1],
        questionnaire_id: questionnaireIds[4],
        resource_id: resourceIds[3],
        section_id: "360004154392",
        video_id: videoIds[54],
        order: 2,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Justiça Digital",
        module_id: moduleIds[2],
        resource_id: resourceIds[5],
        section_id: "360004154392",
        video_id: videoIds[56],
        order: 1,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Programação para advogados",
        module_id: moduleIds[2],
        resource_id: resourceIds[3],
        section_id: "360004154392",
        video_id: videoIds[57],
        order: 2,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Direito da Internet",
        module_id: moduleIds[2],
        resource_id: resourceIds[3],
        section_id: "360004154392",
        video_id: videoIds[58],
        order: 3,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Novas Tendências do Direito Administrativo",
        module_id: moduleIds[3],
        resource_id: resourceIds[3],
        section_id: "360004154392",
        video_id: videoIds[59],
        order: 0,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Novas Tendências do Direito Constitucional",
        module_id: moduleIds[3],
        resource_id: resourceIds[3],
        section_id: "360004154392",
        video_id: videoIds[60],
        order: 1,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Novas Tendências em Regulação",
        module_id: moduleIds[4],
        resource_id: resourceIds[5],
        section_id: "360004154392",
        order: 0,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Desafios da Administração Pública na 4ª Revolução Industrial",
        module_id: moduleIds[4],
        resource_id: resourceIds[3],
        order: 1,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Compliance",
        module_id: moduleIds[4],
        resource_id: resourceIds[3],
        section_id: "360004154392",
        video_id: videoIds[63],
        order: 2,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      },
      {
        name: "Metodologia da Pesquisa",
        module_id: moduleIds[5],
        resource_id: resourceIds[3],
        section_id: "360004154392",
        video_id: videoIds[64],
        order: 0,
        description:
          "Os Poderes Administrativos são inerentes à Administração Pública e possuem caráter instrumental, ou seja, são instrumentos de trabalho essenciais para que a Administração possa desempenhar as suas funções atendendo o interesse público. Os poderes são verdadeiros poderes-deveres, pois a Administração não apenas pode como tem a obrigação de exercê-los"
      }
    ])
    .returning("id");

  const questionIds = await knex("question")
    .insert([
      {
        description:
          "1 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[0],
        active: true
      },
      {
        description: "1 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[0],
        active: true
      },
      {
        description:
          "1 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[0],
        active: true
      },
      {
        description: "1 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[0],
        active: true
      },
      {
        description:
          "1 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[0],
        active: true
      },
      {
        description: "1 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[0],
        active: true
      },
      {
        description:
          "2 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[1],
        active: true
      },
      {
        description: "2 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[1],
        active: true
      },
      {
        description:
          "2-1 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[1],
        active: true
      },
      {
        description: "2-2 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[1],
        active: true
      },
      {
        description:
          "2 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[2],
        active: true
      },
      {
        description: "2 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[2],
        active: true
      },
      {
        description:
          "3 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[3],
        active: true
      },
      {
        description: "3 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[3],
        active: true
      },
      {
        description:
          "4 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[4],
        active: true
      },
      {
        description: "4 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[4],
        active: true
      },
      {
        description:
          "5 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[5],
        active: true
      },
      {
        description: "5 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[5],
        active: true
      },
      {
        description:
          "6 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[6],
        active: true
      },
      {
        description: "6 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[6],
        active: true
      },
      {
        description:
          "7 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[7],
        active: true
      },
      {
        description: "7 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[7],
        active: true
      },
      {
        description:
          "8 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[8],
        active: true
      },
      {
        description: "8 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[8],
        active: true
      },
      {
        description:
          "9 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[9],
        active: true
      },
      {
        description: "9 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[9],
        active: true
      },
      {
        description:
          "10 Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[10],
        active: true
      },
      {
        description: "10 Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[10],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[11],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[11],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[12],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[12],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[13],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[13],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[14],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[14],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[15],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[15],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[16],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[16],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[17],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[17],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[18],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[18],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[19],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[19],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[20],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[20],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[21],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[21],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[22],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[22],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[23],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[23],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[24],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[24],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[25],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[25],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[26],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[26],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[27],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[27],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[28],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[28],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[29],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[29],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[30],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[30],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[31],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[31],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[32],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[32],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[33],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[33],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[34],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[34],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[35],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[35],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[36],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[36],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[37],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[37],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[38],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[38],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[39],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[39],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[40],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[40],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[41],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[41],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[42],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[42],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[43],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[43],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[44],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[44],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[45],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[45],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[46],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[46],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[47],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[47],
        active: true
      },
      {
        description:
          "Considerando que há verdadeira relação de coordenação e de subordinação entre os orgãos integrantes da" +
          "adminĩstração pública, não constitui decorrência do poder hierárquico",
        questionnaire_id: questionnaireIds[48],
        active: true
      },
      {
        description: "Uma outra questão diferente mas sobre a mesma aula",
        questionnaire_id: questionnaireIds[48],
        active: true
      }
    ])
    .returning("id");

  const alternativeIds = await knex("alternative")
    .insert([
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[0],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações",
        question_id: questionIds[0],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[0],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[0],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[0]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[1],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[1],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[1],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[1],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[1]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[2],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[2],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[2],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[2],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[2]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[3],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[3],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[3],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[3],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[3]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[4],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[4],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[4],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[4],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[4]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[5],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[5],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[5],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[5],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[5]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[6],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[6],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[6],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[6],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[6]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[7],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[7],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[7],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[7],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[7]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[8],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[8],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[8],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[8],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[8]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[9],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[9],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[9],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[9],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[9]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[10],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[10],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[10],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[10],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[10]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[11],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[11],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[11],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[11],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[11]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[12],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[12],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[12],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[12],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[12]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[13],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[13],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[13],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[13],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[13]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[14],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[14],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[14],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[14],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[14]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[15],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[15],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[15],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[15],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[15]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[16],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[16],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[16],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[16],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[16]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[17],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[17],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[17],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[17],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[17]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[18],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[18],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[18],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[18],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[18]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[19],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[19],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[19],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[19],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[19]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[20],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[20],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[20],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[20],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[20]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[21],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[21],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[21],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[21],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[21]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[22],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[22],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[22],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[22],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[22]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[23],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[23],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[23],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[23],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[23]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[24],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[24],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[24],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[24],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[24]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[25],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[25],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[25],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[25],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[25]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[26],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[26],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[26],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[26],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[26]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[27],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[27],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[27],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[27],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[27]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[28],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[28],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[28],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[28],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[28]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[29],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[29],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[29],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[29],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[29]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[30],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[30],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[30],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[30],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[30]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[31],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[31],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[31],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[31],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[31]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[32],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[32],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[32],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[32],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[32]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[33],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[33],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[33],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[33],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[33]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[34],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[34],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[34],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[34],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[34]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[35],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[35],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[35],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[35],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[35]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[36],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[36],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[36],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[36],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[36]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[37],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[37],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[37],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[37],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[37]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[38],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[38],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[38],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[38],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[38]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[39],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[39],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[39],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[39],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[39]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[40],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[40],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[40],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[40],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[40]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[41],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[41],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[41],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[41],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[41]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[42],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[42],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[42],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[42],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[42]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[43],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[43],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[43],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[43],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[43]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[44],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[44],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[44],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[44],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[44]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[45],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[45],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[45],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[45],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[45]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[46],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[46],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[46],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[46],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[46]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[47],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[47],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[47],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[47],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[47]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[48],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[48],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[48],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[48],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[48]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[49],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[49],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[49],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[49],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[49]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[50],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[50],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[50],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[50],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[50]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[51],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[51],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[51],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[51],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[51]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[52],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[52],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[52],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[52],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[52]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[53],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[53],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[53],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[53],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[53]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[54],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[54],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[54],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[54],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[54]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[55],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[55],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[55],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[55],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[55]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[56],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[56],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[56],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[56],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[56]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[57],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[57],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[57],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[57],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[57]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[58],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[58],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[58],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[58],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[58]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[59],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[59],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[59],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[59],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[59]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[60],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[60],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[60],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[60],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[60]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[61],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[61],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[61],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[61],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[61]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[62],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[62],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[62],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[62],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[62]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[63],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[63],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[63],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[63],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[63]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[64],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[64],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[64],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[64],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[64]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[65],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[65],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[65],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[65],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[65]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[66],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[66],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[66],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[66],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[66]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[67],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[67],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[67],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[67],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[67]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[68],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[68],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[68],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[68],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[68]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[69],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[69],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[69],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[69],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[69]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[70],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[70],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[70],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[70],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[70]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[71],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[71],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[71],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[71],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[71]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[72],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[72],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[72],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[72],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[72]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[73],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[73],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[73],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[73],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[73]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[74],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[74],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[74],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[74],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[74]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[75],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[75],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[75],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[75],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[75]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[76],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[76],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[76],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[76],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[76]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[77],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[77],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[77],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[77],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[77]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[78],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[78],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[78],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[78],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[78]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[79],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[79],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[79],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[79],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[79]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[80],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[80],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[80],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[80],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[80]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[81],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[81],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[81],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[81],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[81]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[82],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[82],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[82],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[82],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[82]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[83],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[83],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[83],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[83],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[83]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[84],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[84],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[84],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[84],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[84]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[85],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[85],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[85],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[85],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[85]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[86],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[86],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[86],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[86],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[86]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[87],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[87],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[87],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[87],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[87]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[88],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[88],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[88],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[88],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[88]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[89],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[89],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[89],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[89],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[89]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[90],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[90],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[90],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[90],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[90]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[91],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[91],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[91],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[91],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[91]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[92],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[92],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[92],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[92],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[92]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[93],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[93],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[93],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[93],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[93]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[94],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[94],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[94],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[94],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[94]
      },
      {
        letter: "A",
        description: "a possibilidade de dar ordem aos subordinados",
        question_id: questionIds[95],
        order: 0
      },
      {
        letter: "B",
        description:
          "o controle da atividade de orgãos inferiores para o exame" +
          "quanto à legalidade de atos e ao cumprimento de obrigações.",
        question_id: questionIds[95],
        order: 1
      },
      {
        letter: "C",
        description:
          "a possibilidade de avocação de atributos não exclusivas do orgão subordinado",
        question_id: questionIds[95],
        order: 2
      },
      {
        letter: "D",
        description: "a delegação de atribuições não privativas",
        question_id: questionIds[95],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description:
          "a limitação do exercício de direitos individuais em benefício do interesse público",
        question_id: questionIds[95]
      },
      {
        letter: "A",
        description: "a alternativa errada sobre a questão",
        question_id: questionIds[96],
        order: 0
      },
      {
        letter: "B",
        description: "a alternativa também errada",
        question_id: questionIds[96],
        order: 1
      },
      {
        letter: "C",
        description: "a alternativa certa é essa",
        question_id: questionIds[96],
        order: 2
      },
      {
        letter: "D",
        description: "a alternativa não é essa também",
        question_id: questionIds[96],
        order: 3
      },
      {
        letter: "E",
        order: 4,
        description: "não é uma alternativa válida",
        question_id: questionIds[96]
      }
    ])
    .returning("id");

  await knex("exam_question").insert([
    {
      exam_id: examIds[0],
      question_id: questionIds[0]
    },
    {
      exam_id: examIds[0],
      question_id: questionIds[1]
    }
  ]);

  await knex("question")
    .update({ correct_alternative_id: alternativeIds[3] })
    .where({ id: questionIds[0] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[8] })
    .where({ id: questionIds[1] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[13] })
    .where({ id: questionIds[2] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[18] })
    .where({ id: questionIds[3] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[23] })
    .where({ id: questionIds[4] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[28] })
    .where({ id: questionIds[5] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[33] })
    .where({ id: questionIds[6] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[38] })
    .where({ id: questionIds[7] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[43] })
    .where({ id: questionIds[8] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[48] })
    .where({ id: questionIds[9] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[53] })
    .where({ id: questionIds[10] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[58] })
    .where({ id: questionIds[11] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[63] })
    .where({ id: questionIds[12] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[68] })
    .where({ id: questionIds[13] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[73] })
    .where({ id: questionIds[14] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[78] })
    .where({ id: questionIds[15] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[83] })
    .where({ id: questionIds[16] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[88] })
    .where({ id: questionIds[17] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[93] })
    .where({ id: questionIds[18] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[98] })
    .where({ id: questionIds[19] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[103] })
    .where({ id: questionIds[20] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[108] })
    .where({ id: questionIds[21] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[113] })
    .where({ id: questionIds[22] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[118] })
    .where({ id: questionIds[23] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[123] })
    .where({ id: questionIds[24] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[128] })
    .where({ id: questionIds[25] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[133] })
    .where({ id: questionIds[26] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[138] })
    .where({ id: questionIds[27] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[143] })
    .where({ id: questionIds[28] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[148] })
    .where({ id: questionIds[29] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[153] })
    .where({ id: questionIds[30] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[158] })
    .where({ id: questionIds[31] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[163] })
    .where({ id: questionIds[32] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[168] })
    .where({ id: questionIds[33] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[173] })
    .where({ id: questionIds[34] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[178] })
    .where({ id: questionIds[35] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[183] })
    .where({ id: questionIds[36] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[188] })
    .where({ id: questionIds[37] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[193] })
    .where({ id: questionIds[38] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[198] })
    .where({ id: questionIds[39] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[203] })
    .where({ id: questionIds[40] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[208] })
    .where({ id: questionIds[41] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[213] })
    .where({ id: questionIds[42] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[218] })
    .where({ id: questionIds[43] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[223] })
    .where({ id: questionIds[44] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[228] })
    .where({ id: questionIds[45] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[233] })
    .where({ id: questionIds[46] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[238] })
    .where({ id: questionIds[47] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[243] })
    .where({ id: questionIds[48] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[248] })
    .where({ id: questionIds[49] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[253] })
    .where({ id: questionIds[50] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[258] })
    .where({ id: questionIds[51] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[263] })
    .where({ id: questionIds[52] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[268] })
    .where({ id: questionIds[53] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[273] })
    .where({ id: questionIds[54] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[278] })
    .where({ id: questionIds[55] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[283] })
    .where({ id: questionIds[56] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[288] })
    .where({ id: questionIds[57] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[293] })
    .where({ id: questionIds[58] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[298] })
    .where({ id: questionIds[59] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[303] })
    .where({ id: questionIds[60] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[308] })
    .where({ id: questionIds[61] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[313] })
    .where({ id: questionIds[62] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[318] })
    .where({ id: questionIds[63] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[323] })
    .where({ id: questionIds[64] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[328] })
    .where({ id: questionIds[65] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[333] })
    .where({ id: questionIds[66] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[338] })
    .where({ id: questionIds[67] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[343] })
    .where({ id: questionIds[68] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[348] })
    .where({ id: questionIds[69] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[353] })
    .where({ id: questionIds[70] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[358] })
    .where({ id: questionIds[71] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[363] })
    .where({ id: questionIds[72] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[368] })
    .where({ id: questionIds[73] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[373] })
    .where({ id: questionIds[74] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[378] })
    .where({ id: questionIds[75] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[383] })
    .where({ id: questionIds[76] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[388] })
    .where({ id: questionIds[77] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[393] })
    .where({ id: questionIds[78] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[398] })
    .where({ id: questionIds[79] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[403] })
    .where({ id: questionIds[80] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[408] })
    .where({ id: questionIds[81] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[413] })
    .where({ id: questionIds[82] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[418] })
    .where({ id: questionIds[83] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[423] })
    .where({ id: questionIds[84] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[428] })
    .where({ id: questionIds[85] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[433] })
    .where({ id: questionIds[86] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[438] })
    .where({ id: questionIds[87] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[443] })
    .where({ id: questionIds[88] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[448] })
    .where({ id: questionIds[89] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[453] })
    .where({ id: questionIds[90] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[458] })
    .where({ id: questionIds[91] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[463] })
    .where({ id: questionIds[92] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[468] })
    .where({ id: questionIds[93] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[473] })
    .where({ id: questionIds[94] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[478] })
    .where({ id: questionIds[95] });
  await knex("question")
    .update({ correct_alternative_id: alternativeIds[483] })
    .where({ id: questionIds[96] });

  const resumeIds = await knex("resume")
    .insert([
      {
        title: "Direito à privacidade: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "GDPR: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Dados pessoais: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Princípios do tratamento dos dados: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Direitos do titular dos dados: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Direito ao esquecimento: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Direito à revisão : um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Direito à explicação : um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Deveres e responsabilidades de controladores e subcontratados: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by design: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by default: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Segurança de dados, incidentes e resposta: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Data Privacy Impact Assessment (DPIA): um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Data Protection Officer (DPO): um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Direito à privacidade: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "GDPR: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Dados pessoais: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Princípios do tratamento dos dados: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Direitos do titular dos dados: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Direito ao esquecimento: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Direito à revisão : um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Direito à explicação : um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Deveres e responsabilidades de controladores e subcontratados: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by design: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by default: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Segurança de dados, incidentes e resposta: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Data Privacy Impact Assessment (DPIA): um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Data Protection Officer (DPO): um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Data Privacy Impact Assessment (DPIA): um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Data Protection Officer (DPO): um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Direito à privacidade: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "GDPR: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Dados pessoais: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Princípios do tratamento dos dados: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Direitos do titular dos dados: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Direito ao esquecimento: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Direito à revisão : um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Direito à explicação : um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Deveres e responsabilidades de controladores e subcontratados: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by design: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by default: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Segurança de dados, incidentes e resposta: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Deveres e responsabilidades de controladores e subcontratados: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by design: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by default: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title:
          "Deveres e responsabilidades de controladores e subcontratados: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by design: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by default: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by default: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by default: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      },
      {
        title: "Privacy by default: um mapa mental para aprender rápido!",
        raw: `<p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui. </p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade.<span style="text-decoration: underline;"> O discurso &eacute; mais</span> no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>
        <p>Nesta aula&nbsp;<strong>vamos</strong>&nbsp;tratar dos poderes da administra&ccedil;&atilde;o p&uacute;blica, ou seja, os poderes administrativos. Na verdade, mais do que um poder &eacute; um dever do administrador que n&atilde;o pode se eximir da sua compet&ecirc;ncia, da sua responsabilidade de exercer o poder nas hip&oacute;teses que o ordenamento lhe atribui.</p>
        <p>Hoje em dia, uma vis&atilde;o mais <strong>contempor&acirc;nea</strong> desde <em>instituto</em>, &eacute; no sentido de que estamos, na verdade, diante de uma fun&ccedil;&atilde;o p&uacute;blica do que propriamente diante de uma prerrogativa que permite ao administrador impor a sua vontade. O discurso &eacute; mais no sentido de que o administrador precisa desempenhar fun&ccedil;&otilde;es p&uacute;blicas para os mais diversos prop&oacute;sitos e cada fun&ccedil;&atilde;o ser&aacute; caracterizada de uma maneira espec&iacute;fica.</p>`
      }
    ])
    .returning("id");

  const repositoryIds = await knex("repository")
    .insert([
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true },
      { active: true }
    ])
    .returning("id");

  await knex("master_lesson").insert([
    {
      title: "Direito, Tecnologia e Inovação",
      module_id: moduleIds[0],
      resume_id: resumeIds[49],
      repository_id: repositoryIds[49],
      speaker_id: speakerIds[0],
      video_id: videoIds[0]
    },
    {
      title: "AI no Direito",
      module_id: moduleIds[0],
      resume_id: resumeIds[50],
      repository_id: repositoryIds[50],
      speaker_id: speakerIds[1]
    },
    {
      title: "Text Mining no Direito",
      module_id: moduleIds[0],
      resume_id: resumeIds[51],
      repository_id: repositoryIds[51],
      speaker_id: speakerIds[2]
    }
  ]);
  await knex("resource").insert([
    {
      key: "20717Resumo_Estratégia_ Aula1.pdf",
      name: "20717Resumo_Estratégia_ Aula1.pdf",
      type: "pdf",
      size: 646,
      repository_id: repositoryIds[0]
    }
  ]);

  const professorIds = await knex("professor")
    .insert([
      {
        user_id: userIds[1],
        description:
          "Jonny Frank, a Partner with StoneTurn, brings more than 40 years of public, private and education sector experience in forensic investigations, compliance and risk management. He joined StoneTurn in 2011 from PricewaterhouseCoopers (PwC), where he was a partner, and founded and led the firm’s global Fraud Risk & Controls practice.",
        occupation: "Juiz"
      }
    ])
    .returning("id");

  const staffIds = await knex("staff")
    .insert([
      {
        user_id: 6
      }
    ])
    .returning("id");

  const lessonIds = await knex("lesson")
    .insert([
      {
        title: "Direito à privacidade",
        number: 1,
        resume_id: resumeIds[1],
        repository_id: repositoryIds[0],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[1],
        video_id: videoIds[1]
      },
      {
        title: "GDPR",
        number: 2,
        subject_id: subjectIds[0],
        resume_id: resumeIds[2],
        repository_id: repositoryIds[2],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[2],
        video_id: videoIds[2]
      },
      {
        title: "Dados pessoais",
        number: 3,
        subject_id: subjectIds[0],
        resume_id: resumeIds[3],
        repository_id: repositoryIds[3],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[3],
        video_id: videoIds[3]
      },
      {
        title: "Princípios do tratamento dos dados",
        number: 4,
        subject_id: subjectIds[0],
        resume_id: resumeIds[4],
        repository_id: repositoryIds[4],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[4],
        video_id: videoIds[4]
      },
      {
        title: "Direitos do titular dos dados",
        number: 5,
        subject_id: subjectIds[0],
        resume_id: resumeIds[5],
        repository_id: repositoryIds[5],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[5],
        video_id: videoIds[5]
      },
      {
        title: "Direito ao esquecimento",
        number: 6,
        subject_id: subjectIds[0],
        resume_id: resumeIds[6],
        repository_id: repositoryIds[6],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[6],
        video_id: videoIds[6]
      },
      {
        title: "Direito à revisão ",
        number: 7,
        subject_id: subjectIds[0],
        resume_id: resumeIds[7],
        repository_id: repositoryIds[7],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[7],
        video_id: videoIds[7]
      },
      {
        title: "Direito à explicação ",
        number: 8,
        subject_id: subjectIds[0],
        resume_id: resumeIds[8],
        repository_id: repositoryIds[8],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[8],
        video_id: videoIds[8]
      },
      {
        title: "Deveres e responsabilidades de controladores e subcontratados",
        number: 9,
        subject_id: subjectIds[0],
        resume_id: resumeIds[9],
        repository_id: repositoryIds[9],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[9],
        video_id: videoIds[9]
      },
      {
        title: "Privacy by design",
        number: 10,
        subject_id: subjectIds[0],
        resume_id: resumeIds[10],
        repository_id: repositoryIds[10],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[10],
        video_id: videoIds[10]
      },
      {
        title: "Privacy by default",
        number: 11,
        subject_id: subjectIds[0],
        resume_id: resumeIds[11],
        repository_id: repositoryIds[11],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[11],
        video_id: videoIds[11]
      },
      {
        title: "Segurança de dados, incidentes e resposta",
        number: 12,
        subject_id: subjectIds[0],
        resume_id: resumeIds[12],
        repository_id: repositoryIds[12],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[12],
        video_id: videoIds[12]
      },
      {
        title: "Data Privacy Impact Assessment (DPIA)",
        number: 13,
        subject_id: subjectIds[5],
        resume_id: resumeIds[13],
        repository_id: repositoryIds[13],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[13],
        video_id: videoIds[13],
        trial: true
      },
      {
        title: "Data Protection Officer (DPO)",
        number: 14,
        subject_id: subjectIds[0],
        resume_id: resumeIds[14],
        repository_id: repositoryIds[14],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[14],
        video_id: videoIds[14]
      },
      {
        title: "Inteligência Artificial.",
        number: 1,
        subject_id: subjectIds[1],
        resume_id: resumeIds[15],
        repository_id: repositoryIds[15],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[15],
        video_id: videoIds[15]
      },
      {
        title: "inteligência artificial e profissões",
        number: 2,
        subject_id: subjectIds[1],
        resume_id: resumeIds[16],
        repository_id: repositoryIds[16],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[16],
        video_id: videoIds[16]
      },
      {
        title: "Responsabilidade Civil e Inteligência Artificial",
        number: 3,
        subject_id: subjectIds[1],
        resume_id: resumeIds[17],
        repository_id: repositoryIds[17],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[17],
        video_id: videoIds[17]
      },
      {
        title: "Propriedade Intelectual e Inteligência Artificial.",
        number: 4,
        subject_id: subjectIds[1],
        resume_id: resumeIds[18],
        repository_id: repositoryIds[18],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[18],
        video_id: videoIds[18]
      },
      {
        title: "Democracia, desigualdade e inteligência artificial.",
        number: 5,
        subject_id: subjectIds[1],
        resume_id: resumeIds[19],
        repository_id: repositoryIds[19],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[19],
        video_id: videoIds[19]
      },
      {
        title: "Big Data",
        number: 6,
        subject_id: subjectIds[1],
        resume_id: resumeIds[20],
        repository_id: repositoryIds[20],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[20],
        video_id: videoIds[20]
      },
      {
        title: "Economia data driven",
        number: 7,
        subject_id: subjectIds[1],
        resume_id: resumeIds[21],
        repository_id: repositoryIds[21],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[21],
        video_id: videoIds[21]
      },
      {
        title: "Realidade Virtual.",
        number: 8,
        subject_id: subjectIds[1],
        resume_id: resumeIds[22],
        repository_id: repositoryIds[22],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[22],
        video_id: videoIds[22]
      },
      {
        title: "Impressão 3D",
        number: 9,
        subject_id: subjectIds[1],
        resume_id: resumeIds[23],
        repository_id: repositoryIds[23],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[23],
        video_id: videoIds[23]
      },
      {
        title: "Veículos Autônomos (Carros, Drones e Embarcações)",
        number: 10,
        subject_id: subjectIds[1],
        resume_id: resumeIds[24],
        repository_id: repositoryIds[24],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[24],
        video_id: videoIds[24]
      },
      {
        title: "Engenharia Genética",
        number: 11,
        subject_id: subjectIds[1],
        resume_id: resumeIds[25],
        repository_id: repositoryIds[25],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[25],
        video_id: videoIds[25]
      },
      {
        title: "Nano e biotecnologia",
        number: 12,
        subject_id: subjectIds[1],
        resume_id: resumeIds[26],
        repository_id: repositoryIds[26],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[26],
        video_id: videoIds[26]
      },
      {
        title: "Bioética",
        number: 13,
        subject_id: subjectIds[1],
        resume_id: resumeIds[27],
        repository_id: repositoryIds[27],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[27],
        video_id: videoIds[27]
      },
      {
        title: "Internet das Coisas",
        number: 14,
        subject_id: subjectIds[1],
        resume_id: resumeIds[28],
        repository_id: repositoryIds[28],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[28],
        video_id: videoIds[28]
      },
      {
        title: " Segurança",
        number: 15,
        subject_id: subjectIds[5],
        resume_id: resumeIds[29],
        repository_id: repositoryIds[29],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[29],
        video_id: videoIds[29]
      },
      {
        title: "Cyber Segurança e escritórios de advocacia.",
        number: 16,
        subject_id: subjectIds[5],
        resume_id: resumeIds[30],
        repository_id: repositoryIds[30],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[30],
        video_id: videoIds[30]
      },
      {
        title: "Defining your professional persona",
        number: 1,
        subject_id: subjectIds[2],
        resume_id: resumeIds[31],
        repository_id: repositoryIds[31],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[31],
        video_id: videoIds[31]
      },
      {
        title: "Personal Branding",
        number: 2,
        subject_id: subjectIds[2],
        resume_id: resumeIds[32],
        repository_id: repositoryIds[32],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[32],
        video_id: videoIds[32]
      },
      {
        title: "Mastering Negotiation ",
        number: 3,
        subject_id: subjectIds[2],
        resume_id: resumeIds[33],
        repository_id: repositoryIds[33],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[33],
        video_id: videoIds[33]
      },
      {
        title: "Getting to yes with yourself",
        number: 4,
        subject_id: subjectIds[2],
        resume_id: resumeIds[34],
        repository_id: repositoryIds[34],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[34],
        video_id: videoIds[34]
      },
      {
        title: "Colaboração e construção de conhecimento coletivo",
        number: 5,
        subject_id: subjectIds[2],
        resume_id: resumeIds[35],
        repository_id: repositoryIds[35],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[35],
        video_id: videoIds[35]
      },
      {
        title: "Leadership for lawyers in times of change ",
        number: 6,
        subject_id: subjectIds[2],
        resume_id: resumeIds[36],
        repository_id: repositoryIds[36],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[36],
        video_id: videoIds[36]
      },
      {
        title:
          "Inteligência emocional para o desempenho da profissão jurídica ",
        number: 7,
        subject_id: subjectIds[2],
        resume_id: resumeIds[37],
        repository_id: repositoryIds[37],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[37],
        video_id: videoIds[37]
      },
      {
        title: "Change management para profissionais de direito ",
        number: 8,
        subject_id: subjectIds[2],
        resume_id: resumeIds[38],
        repository_id: repositoryIds[38],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[38],
        video_id: videoIds[38]
      },
      {
        title: "Making smart decisions ",
        number: 9,
        subject_id: subjectIds[2],
        resume_id: resumeIds[39],
        repository_id: repositoryIds[39],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[39],
        video_id: videoIds[39]
      },
      {
        title: "Como apresentar uma ideia de forma persuasiva",
        number: 10,
        subject_id: subjectIds[2],
        resume_id: resumeIds[40],
        repository_id: repositoryIds[40],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[40],
        video_id: videoIds[40]
      },
      {
        title: "Visual Law",
        number: 11,
        subject_id: subjectIds[2],
        resume_id: resumeIds[41],
        repository_id: repositoryIds[41],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[41],
        video_id: videoIds[41]
      },
      {
        title: "Escrita efetiva para juristas",
        number: 12,
        subject_id: subjectIds[2],
        resume_id: resumeIds[42],
        repository_id: repositoryIds[42],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[42],
        video_id: videoIds[42]
      },
      {
        title: "Introdução à análise econômica do direito",
        number: 1,
        subject_id: subjectIds[3],
        resume_id: resumeIds[43],
        repository_id: repositoryIds[43],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[43],
        video_id: videoIds[43]
      },
      {
        title: "Teoria dos Jogos",
        number: 2,
        subject_id: subjectIds[3],
        resume_id: resumeIds[44],
        repository_id: repositoryIds[44],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[44],
        video_id: videoIds[44]
      },
      {
        title: "Economia dos Contratos",
        number: 3,
        subject_id: subjectIds[3],
        resume_id: resumeIds[45],
        repository_id: repositoryIds[45],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[45],
        video_id: videoIds[45]
      },
      {
        title: "Economia dos Conflitos",
        number: 4,
        subject_id: subjectIds[3],
        resume_id: resumeIds[46],
        repository_id: repositoryIds[46],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[46],
        video_id: videoIds[46]
      },
      {
        title: "Economia do Crime",
        number: 5,
        subject_id: subjectIds[3],
        resume_id: resumeIds[47],
        repository_id: repositoryIds[47],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[47],
        video_id: videoIds[47]
      },
      {
        title: "Economia Comportamental",
        number: 6,
        subject_id: subjectIds[3],
        resume_id: resumeIds[48],
        repository_id: repositoryIds[48],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[48],
        video_id: videoIds[48]
      },
      {
        title: "Introdução: Proteção de Dados",
        number: 1,
        subject_id: null,
        resume_id: resumeIds[1],
        repository_id: repositoryIds[0],
        professor_id: professorIds[0],
        questionnaire_id: questionnaireIds[1],
        video_id: videoIds[1]
      }
    ])
    .returning("id");

  await knex("note").insert([
    {
      text: "Existem dois principais modelos. O conceitual e o físico.",
      lesson_id: lessonIds[0],
      user_id: userIds[0]
    },
    {
      text: "Existem três principais modelos. O conceitual e o físico.",
      lesson_id: lessonIds[0],
      user_id: userIds[0]
    },
    {
      text: "Existem quatro principais modelos. O conceitual e o físico.",
      lesson_id: lessonIds[0],
      user_id: userIds[0]
    }
  ]);

  await knex("enrollment_module").insert([
    {
      enrollment_id: enrollmentIds[0],
      module_id: moduleIds[0]
    },
    {
      enrollment_id: enrollmentIds[0],
      module_id: moduleIds[1]
    },
    {
      enrollment_id: enrollmentIds[1],
      module_id: moduleIds[0]
    },
    {
      enrollment_id: enrollmentIds[1],
      module_id: moduleIds[1]
    },
    {
      enrollment_id: enrollmentIds[2],
      module_id: moduleIds[0]
    },
    {
      enrollment_id: enrollmentIds[2],
      module_id: moduleIds[1]
    },
    {
      enrollment_id: enrollmentIds[3],
      module_id: moduleIds[0]
    },
    {
      enrollment_id: enrollmentIds[3],
      module_id: moduleIds[1]
    },
    {
      enrollment_id: enrollmentIds[4],
      module_id: moduleIds[0]
    },
    {
      enrollment_id: enrollmentIds[5],
      module_id: moduleIds[0]
    },
    {
      enrollment_id: enrollmentIds[4],
      module_id: moduleIds[1]
    },
    {
      enrollment_id: enrollmentIds[5],
      module_id: moduleIds[0]
    },
    {
      enrollment_id: enrollmentIds[5],
      module_id: moduleIds[1]
    }
  ]);

  await knex("course_subject").insert([
    {
      course_id: 1,
      subject_id: 1,
      availability_date: "2019-06-01 00:00:00"
    },
    {
      course_id: 1,
      subject_id: 2,
      availability_date: "2019-06-01 00:00:00"
    },
    {
      course_id: 1,
      subject_id: 5,
      availability_date: "2019-06-01 00:00:00"
    },
    {
      course_id: 1,
      subject_id: 6,
      availability_date: "2019-06-01 00:00:00"
    },
    {
      course_id: 1,
      subject_id: 3,
      availability_date: "2019-06-01 00:00:00"
    },
    {
      course_id: 1,
      subject_id: 4,
      availability_date: "2019-06-01 00:00:00"
    },
    {
      course_id: 1,
      subject_id: 7,
      availability_date: "2019-06-01 00:00:00"
    },
    {
      course_id: 1,
      subject_id: 8,
      availability_date: "2019-06-01 00:00:00"
    },
    {
      course_id: 1,
      subject_id: 9,
      availability_date: "2019-06-01 00:00:00"
    },
    {
      course_id: 1,
      subject_id: 10,
      availability_date: "2019-06-01 00:00:00"
    }
  ]);

  await knex("subject")
    .where("id", "=", 1)
    .update({
      lesson_id: lessonIds[48]
    });
};
