export default function constructResponse(success, data = {}, message = "") {
  return {
    success,
    data,
    message,
  };
}
