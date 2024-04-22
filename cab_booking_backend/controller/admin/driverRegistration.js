const pool = require("../../config/db");
const bcrypt = require("bcrypt");

// Read
const getAllDrivers = async (req, res) => {
  try {
    const connect = await pool.getConnection();

    const getQuery = `SELECT * FROM users WHERE role = 2 AND is_delete != 1`;

    let getData;

    try {
      [getData] = await connect.execute(getQuery);
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        status: 0,
        msg: "Could not fetch the required data!!!",
      });
    }

    connect.release();

    res.status(200).json({
      status: 1,
      msg: "Data fetched successfully!!",
      data: getData,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 0,
      msg: "Server Error!!!",
    });
  }
};


const getAllDriversById = async(req, res)=>{
  console.log(req);
  const id = req.params.id;
  const babai = req.query.babai;
  console.log(babai);
  try{
    const connect = await pool.getConnection();
    const query = ` SELECT * FROM users WHERE user_id = ${id} AND is_delete !=1` ;

    const [result] = await connect.execute(query);
    connect.release();
    if(result.length === 0){
      return res.status(200).json({
        status: 0,
        msg: "Cloud not fetch the required data!!",
      });
    }
    res.status(200).json({
      status: 1,
      msg: "Data fetched successfully!!",
      data: result,
    });

  } catch(err){
    res.status(500).json({
      status: 0,
      msg: "Server Error!!",
    });
  }
}



// create
const driverRegistration = async (req, res) => {
  const { name, email, phone, password } = req.body;
// const name = req.body.name;
// const email = req.body.email;
// const phone = req.body.phone;
// const password = req.body.password;

// console.log(req.body);
// console.log("name" + name);
  if (!name || !email || !phone || !password) {
    return res.status(200).json({
      status: 0,
      msg: "Please fill in all the fields in order to proceed!!!",
    });
  }
  

  try {
    const connect = await pool.getConnection();

    const query = `SELECT COUNT(1) as count FROM users WHERE email = '${
      email ? email : "abc@gmail.com"
    }' OR phone = '${phone ? phone : "9999999999"}'`;

    let countData;

    try {
      [countData] = await connect.execute(query);
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        status: 0,
        msg: "Could not search for the required data!!!",
      });
    }

    if (countData[0].count > 0) {
      return res.status(200).json({
        status: 0,
        msg: "Driver already registered!!!",
      });
    }

    const enpassword = await bcrypt.hash(password.toString(), 10);

    const insertQuery = `INSERT INTO users (name,email,phone,password,role) VALUES ('${name}','${email}','${phone}','${enpassword}',2)`;

    try {
      await connect.execute(insertQuery);
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        status: 0,
        msg: "Could not save the data!!!",
      });
    }

    connect.release();

    res.status(201).json({
      status: 1,
      msg: "Data saved successfully!!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 0,
      msg: "Server Error!!!",
    });
  }
};

// Update

const updateDriver = async (req, res) => {
  const { name, email, phone } = req.body;
  const id = req.params.id;

  if (!name && !email && !phone ) {
    return res.status(200).json({
      status: 0,
      msg: "Please fill in atleast one field in order to update!!!",
    });
  }

  try {
    let data;

    const connect = await pool.getConnection();
    const getQuery = `SELECT * FROM users WHERE user_id = ${id}`;
    try {
      [data] = await connect.execute(getQuery);
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        status: 0,
        msg: "Could not fetch the requried data!!!",
      });
    }

    let check;

    // if (password) {
    //   check = await bcrypt.compare(password, data[0].password);
    // }

    // let update = "",
    //   enpassword;

    if (
      data[0].name === name &&
      data[0].email === email &&
      data[0].phone === phone &&
      check
    ) {
      return res.status(200).json({
        status: 0,
        msg: "Data is not updated since same data is provided!!!",
      });
    } else {
      const date = new Date().getTime();
      update += `modified_on = ${date},`;
    }

    // if (password) {
    //   enpassword = await bcrypt.hash(password.toString(), 10);
    // }

    name && (update += `name = '${name}',`);
    email && (update += `email = '${email}',`);
    phone && (update += `phone = '${phone}',`);
    // password && (update += `password = '${enpassword}',`);

    update = update.slice(0, -1);
    const updateQuery = `UPDATE users SET ${update} WHERE user_id = ${id}`;

    try {
      await connect.execute(updateQuery);
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        status: 0,
        msg: "Could not update the data!!!",
      });
    }

    connect.release();

    res.status(200).json({
      status: 1,
      msg: "Data updated successfully!!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 0,
      msg: "Server Error!!!",
    });
  }
};

// Delete

const deleteDriver = async (req, res) => {
  try {
    const id = req.params.id;

    const countQuery = `SELECT COUNT(1) as count FROM users WHERE user_id = ${id} AND is_delete = 1`;

    const connect = await pool.getConnection();

    let countData;

    try {
      [countData] = await connect.execute(countQuery);
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        status: 0,
        msg: "Could not search for the required data!!!",
      });
    }
    console.log(countData);

    if (countData[0].count > 0) {
      return res.status(200).json({
        status: 0,
        msg: "Value is already set to 1!!!",
      });
    }

    const date = new Date().getTime();
    const deleteQuery = `UPDATE users SET is_delete = 1,modified_on = ${date} WHERE user_id = ${id}`;

    try {
      await connect.execute(deleteQuery);
    } catch (err) {
      console.log(err);
      return res.status(200).json({
        status: 0,
        msg: "Could not delete the data!!!",
      });
    }

    connect.release();

    res.status(200).json({
      status: 1,
      msg: "Data deleted successfully!!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: 0,
      msg: "Server Error!!!",
    });
  }
};
module.exports = {
  driverRegistration,
  getAllDrivers,
  updateDriver,
  deleteDriver,
  getAllDriversById,
};
