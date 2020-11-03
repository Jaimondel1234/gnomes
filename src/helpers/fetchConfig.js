import PropTypes, { string } from "prop-types";

export async function fetchConfig({ method = "GET", url, headers = {} }) {
  const resp = await fetch(url, {
    method: "GET",
    headers: { Accept: "application/json" },
  });
  if (resp.status === 200) {
    return await resp.json();
  } else {
    throw new Error(`Error ${resp.status}`);
  }
}

fetchConfig.propTypes = {
  method: PropTypes.string,
  url: PropTypes.string,
  header: PropTypes.objectOf(string),
};
