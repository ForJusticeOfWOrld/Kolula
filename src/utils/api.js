
const api_host = 'dev.inbooma.net';

const debug_api_host = 'test.inbooma.net';

const test_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzdWg3ZnQ2Zi00ZjU4LTQ5NWYtYTc3YS1iNGE0YjI2aDEyZDQiLCJleHAiOjE1NDY2MDUwMjR9.NHAxDEbMQnmZ3DNSOEagcMiKxXg9bZoUuHkz8q5ZAcg';//'<ask_for_id>';


export function getLocation() {
      // Unix timestamp
      let timestamp = Math.round((new Date()).getTime() / 1000);
      // generate data for sha1 hash
      let api_hash = client_id.toString() + timestamp + api_key;
  
      let api_data = 'data[Client][command]=ebikesharing_get_user'
          + '&data[Client][id]=' + client_id
          + '&data[Client][timestamp]=' + timestamp
          + '&data[Client][hash]=' + sha1(api_hash)
          + '&data[Client][response_type]=json'
          + '&data[User][password]=' + md5(password)
          + '&data[User][email]=' + email;
  
      return fetchApi(api_data, force_testserver, debug);
  }
  