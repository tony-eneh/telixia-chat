import { useRef, useState } from 'react';
import { XIcon, UserIcon } from '@heroicons/react/solid';

function Signup() {
  const [profilePicture, setProfilePicture] = useState('');
  const filePicker = useRef<any>();

  function openFile() {
    filePicker.current!.click();
  }

  function handleImageSelection(e: any) {
    const fileReader = new FileReader();

    fileReader.onload = (e: any) => {
      setProfilePicture(e.target.result);
    };

    fileReader?.readAsDataURL(e.target.files[0]);
  }

  function removeImage() {
    setProfilePicture('');
  }

  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="max-w-md flex flex-col border border-gray-400 rounded-lg shadow-sm space-y-8 items-center p-8">
        <div className="flex flex-col space-y-1 items-center">
          <p className="serif font-mono tracking-wider">Telixia</p>
          <p className="font-semibold text-[10px]">Messenger</p>
        </div>
        <div className="relative rounded-full h-24 w-24 object-contain p-[2px] border border-blue-400">
          <div
            className="absolute top-0 left-full -right-6 bottom-0 flex items-center justify-end"
            onClick={removeImage}
          >
            <XIcon className="h-5 w-5 text-gray-700" />
          </div>
          {profilePicture ? (
            <img
              className="rounded-full object-cover w-full h-full"
              src={profilePicture}
              alt="profile picture"
            />
          ) : (
            <div className="p-1 text-gray-300" onClick={openFile}>
              <p className="absolute text-gray-500 font-semibold top-0 right-0 left-0 bottom-0 flex justify-center items-center">
                ADD PIC
              </p>
              <UserIcon />
            </div>
          )}
        </div>
        <input className="px-5 py-2" type="text" placeholder="Username" />
        <input className="px-5 py-2" type="text" placeholder="Display Name" />
        <button className="w-full bg-blue-400 text-white py-3 px-5 border rounded-lg hover:bg-blue-500">
          Sign Up
        </button>
        <input
          className="hidden"
          type="file"
          accept="image/*"
          ref={filePicker}
          onChange={handleImageSelection}
        />
      </div>
    </div>
  );
}

export default Signup;
