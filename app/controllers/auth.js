const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username !== "admin" || password !== "admin") {
      return res.status(401).json({ msg: "Unauthorize" });
    }
    res.status(200).json({ msg: "Berhasil login" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  login,
};
