import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, selectUser } from "../features/user/userSlice";

const UserForm = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState(user);
  const [isDirty, setIsDirty] = useState(false); // Track unsaved changes

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setIsDirty(true);
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateUser(formData));
    setIsDirty(false);
  };

  // Warn user about unsaved changes before leaving
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "You have unsaved changes!";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isDirty]);

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">User Data Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="id" value={formData.id} readOnly className="border p-2 rounded bg-gray-200"/>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded"/>
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="border p-2 rounded"/>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="border p-2 rounded"/>
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border p-2 rounded"/>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
