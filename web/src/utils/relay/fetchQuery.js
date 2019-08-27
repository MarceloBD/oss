import JWTToken from '../JWTToken';
import fetchWithRetries from './fetchWithRetries';

export const GRAPHQL_URL = `${process.env.BASE_URL_GRAPHQL}/graphql`;

const isMutation = operation => operation.operationKind === 'mutation';
const handleData = response => {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    return response.json();
  }

  return response.text();
};

const fetchQuery = async (operation, variables) => {
  try {
    const body = JSON.stringify({
      query: operation.text,
      variables,
    });
    const headers = {
      Accept: 'application/json',
      Authorization: JWTToken.get(),
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };

    const response = await fetchWithRetries(GRAPHQL_URL, {
      method: 'POST',
      headers,
      body,
      fetchTimeout: 20000,
      retryDelays: [1000, 3000, 5000],
    });

    const data = await handleData(response);

    if (response.status === 401) {
      throw data.errors;
    }

    if (isMutation(operation) && data.errors) {
      throw data.errors;
    }

    if (!data.data) {
      throw data.errors;
    }

    if (data.errors) {
      throw data.errors;
    }

    return data;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log('err: ', err);

    const timeoutRegexp = new RegExp(/Still no successful response after/);
    const serverUnavailableRegexp = new RegExp(/Failed to fetch/);
    if (timeoutRegexp.test(err.message) || serverUnavailableRegexp.test(err.message)) {
      throw new Error('Serviço indisponível. Tente novamente mais tarde.');
    }

    throw err;
  }
};

export default fetchQuery;
