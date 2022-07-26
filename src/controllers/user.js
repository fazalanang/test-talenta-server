const { user } = require('../../models');

exports.addUsers = async (req, res) => {
    try {
      await user.create(req.body);
  
      res.send({
        status: "success",
        message: "Add user finished",
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
  };

exports.getUsers = async (req, res) => {
  try {
    const users = await user.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
  
      await user.destroy({
        where: {
          id,
        },
      });
  
      res.send({
        status: "success",
        message: `Delete user id: ${id} finished`,
      });
    } catch (error) {
      console.log(error);
      res.send({
        status: "failed",
        message: "Server Error",
      });
    }
  };