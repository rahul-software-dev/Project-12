export const toFormData = (obj) => {
    const formData = new FormData();
    Object.entries(obj).forEach(([key, value]) => {
      formData.append(key, value);
    });
    return formData;
  };
  
  export const resetFields = (setters) => {
    setters.forEach((set) => set(''));
  };
  
  export const extractInputValues = (inputs) =>
    Object.fromEntries(inputs.map((input) => [input.name, input.value]));