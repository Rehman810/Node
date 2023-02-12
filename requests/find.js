import MensRAnking from "../src/models/mens.js";

const findUser = async (req, res) => {
  try {
    const getMen = await MensRAnking.findById(req.params.id);
    res.status(200).send(getMen);
  } catch (e) {
    res.status(401).send({ status: 401, e });
  }
};

export default findUser;
