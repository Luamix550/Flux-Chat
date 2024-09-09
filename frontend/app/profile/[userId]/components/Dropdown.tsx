import React, { useRef } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from '@nextui-org/react';
import { DropdownComponentsProps } from '../../../types/types';

export default function DropdownComponent({ changePictures }: DropdownComponentsProps) {
  const profileInputRef = useRef<HTMLInputElement>(null);
  const coverPhotoInputRef = useRef<HTMLInputElement>(null);

  const triggerInput = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleFileChange = (optionType: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) changePictures(optionType, file);
  };

  return (
    <div>
        <Dropdown>
      <DropdownTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 text-customBlue hover:text-customWhite"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
          />
        </svg>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile" onClick={() => triggerInput(profileInputRef)}>
          Change Profile Picture
        </DropdownItem>
        <DropdownItem key="coverPhoto" onClick={() => triggerInput(coverPhotoInputRef)}>
          Change Cover Photo
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Input
        ref={profileInputRef}
        type="file"
        accept="image/*"
        className="hidden invisible"
        onChange={(e) => handleFileChange("profile", e)}
      />
      <Input
        ref={coverPhotoInputRef}
        type="file"
        accept="image/*"
        className="hidden invisible"
        onChange={(e) => handleFileChange("coverPhoto", e)}
      />
    </div>
  );
}
