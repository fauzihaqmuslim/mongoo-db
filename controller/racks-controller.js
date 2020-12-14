const Racks = require("../models/racks");

class RackController {
  static createRacks = async (req, res) => {
    try {
      const racksController = await Racks.create({
        section: req.body.section,
        number: req.body.number,
        floor: req.body.floor,
      });
      res.status(201).json({
        messege: "create racks",
        data: racksController,
      });
    } catch {
      console.log(error);
    }
  };
  static findRacks = async (req, res) => {
    try {
      const findRacksNumber = await Racks.find({
        section: req.body.section,
        number: req.body.number,
        floor: req.body.floor,
      });
      res.status(201).json({
        messege: "create racks",
        data: findRacksNumber,
      });
    } catch {
      console.log(error);
    }
  };
  static updateRacks = async (req, res) => {
    try {
      const racks = await Racks.updateOne({
        section: req.body.section,
        number: req.body.number,
        floor: req.body.floor,
      });
      res.status(201).json({
        messege: "update racks",
        data: racks,
      });
    } catch {
      res.status(400).json({
        messege: "error",
      });
    }
  };
  static deleteRacks = async (req, res) => {
    Racks.deleteOne(
      {
        _id: req.params.id,
      },
      (error, result) => {
        if (error) {
          res.status(400).send({
            messege: "error",
          });
        } else {
          res.status(200).send({
            messege: "berhasil delete",
          });
        }
      }
    );
  };
}

module.exports = RackController;
