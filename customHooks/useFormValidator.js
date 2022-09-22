// custom hook created to handle form submission event
function useFormValidator(title, desc, setError) {
  // setting error msg to false
  setError(false);

  // setting errros in the dictionary due to wrong inputs
  // validating title field
  if (title == "" || title.length == 0) {
    // sending success message
    setError("Thought must have a title.");
    return;
  }

  if (title.length < 6) {
    // sending success message
    setError("Title must be atleast 6 characters long.");
    return;
  }

  if (title.length > 30) {
    // sending success message
    setError("Title must be within 30 characters.");
    return;
  }

  // validating description field
  if (desc == "" || desc.length == 0) {
    // sending success message
    setError("Thought must have a description.");
    return;
  }

  if (desc.length < 36) {
    // sending success message
    setError("Description must have atleast 36 characters.");
    return;
  }

  if (desc.length > 1200) {
    // sending success message
    setError("Description must be within 1200 characters.");
    return;
  }
}

export default useFormValidator;
