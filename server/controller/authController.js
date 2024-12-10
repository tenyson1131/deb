const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOnde({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const verificationCode = generateVerificationCode();

    const newUser = new User({
      name,
      email,
      password,
      verificationCode,
    });

    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", verificationCode });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
