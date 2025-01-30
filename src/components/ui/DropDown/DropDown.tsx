import Dropdown from "rc-dropdown";
import { MenuItem, MenuList, MenuWrapper, StyledButton } from "./DropDown.style";
import { useEffect, useState } from "react";

export const DropdownMenu = () => {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (action: string) => {
    alert(`${action} Clicked`);
    setVisible(false); 
  };
  useEffect(()=>{
    console.log(visible);
    
  },[visible])
  const menu = (
    <MenuWrapper onClick={() => setVisible(false)}> 
      
      <MenuList>
        <MenuItem onClick={() => handleMenuClick("Profile")}>Profile</MenuItem>
        <MenuItem onClick={() => handleMenuClick("Settings")}>Settings</MenuItem>
        <hr />
        <MenuItem onClick={() => handleMenuClick("Logout")}>Logout</MenuItem>
      </MenuList>
    </MenuWrapper>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]} onVisibleChange={setVisible}>
      <StyledButton>Open Menu ▼</StyledButton>
    </Dropdown>
  );
};
