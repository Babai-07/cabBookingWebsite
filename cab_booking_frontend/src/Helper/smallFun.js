

export const inputChange = (e, form, setForm) => {
  const { name, value } = e.target;
 
  console.log(name, value);
  setForm({ ...form, [name]: value });
};

export const handleFileChange = (e, form, setForm) => {
  const { name } = e.target;
  setForm({ ...form, [name]: e.target.files[0] });
};