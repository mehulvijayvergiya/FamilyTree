app.post('/members', async (req, res) => {
  try {
    const { name, dateOfBirth, parents, siblings, children } = req.body;

    // Make sure parents, siblings, and children are arrays (to avoid data issues)
    if (!Array.isArray(parents) || !Array.isArray(siblings) || !Array.isArray(children)) {
      return res.status(400).json({ message: 'Parents, siblings, and children must be arrays.' });
    }

    // Create a new family member document
    const member = new FamilyMember({
      name,
      dateOfBirth,
      parents,
      siblings,
      children,
    });

    // Save the family member to the database
    await member.save();
    res.status(201).json(member);
  } catch (error) {
    console.error('Error adding member:', error);
    res.status(500).json({ message: 'Error adding family member', error });
  }
});
