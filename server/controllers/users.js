import mongoose from "mongoose"
import User from '../models/auth.js'

export const getAllUsers = async(req, res) => {
   try {
      const allUsers = await User.find();
      const allUserDetails = []
      allUsers.forEach(users => {
          allUserDetails.push({
              _id: users._id,
              name: users.name,
              about: users.about,
              tags: users.tags,
              joinedOn: users.joinedOn
          })
         });
      res.status(200).json(allUserDetails) 
   } catch (error) {
      res.status(404).json({ message: error.message })
   }
} 

export const updateProfile = async (req, res) => {
    const { id: _id } = req.params;
    const { name, about, tags } = req.body;

   if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).send('User unavailable...');
   }

   try {
      const updatedProfile = await User.findByIdAndUpdate(_id, { $set: { 'name': name, 'about': about, 'tags': tags}}, { new: true })
      res.status(200).json(updatedProfile);
   } catch (error) {
      res.status(405).json({ message: error.message })
   }
}

export const friendAddController = async (req, res) => {
    const { id: _id } = req.params;
    const { userId } = req.body;

   if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).send('user unavailable...');
   }

   try {

      const user = await User.findById(_id);

      user.friend.push(String(userId));
      await User.findByIdAndUpdate(_id, user);
      res.status(200).json({ message: "Added successfully" });

   } catch (error) {
      res.status(404).json({ message: "id not found" })
   }
}

export const friendRemoveController = async (req, res) => {
    const { id: _id } = req.params;
    const { userId } = req.body;

   if(!mongoose.Types.ObjectId.isValid(_id)){
      return res.status(404).send('user unavailable...');
   }

   try {

      const user = await User.findById(_id);
      
      user.friend = user.friend.filter((id) => id !== String(userId));
      await User.findByIdAndUpdate(_id, user);
      res.status(200).json({ message: "removed successfully"});

   } catch (error) {
      res.status(404).json({ message: "id not found" });
   }
}

