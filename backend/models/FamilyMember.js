import mongoose from 'mongoose';

const familyMemberSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  parents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FamilyMember' }],
  siblings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FamilyMember' }],
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FamilyMember' }],
});

const FamilyMember = mongoose.model('FamilyMember', familyMemberSchema);

export default FamilyMember;
