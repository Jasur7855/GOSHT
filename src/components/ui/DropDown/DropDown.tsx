import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled from "styled-components";

export const DropDown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <StyledButton>Open Menu ▼</StyledButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <StyledContent sideOffset={5}>
          <StyledItem onSelect={() => alert("Profile clicked!")}>
            Profile
          </StyledItem>
          <StyledItem onSelect={() => alert("Settings clicked!")}>
            Settings
          </StyledItem>
          <StyledSeparator />
          <StyledItem onSelect={() => alert("Logout clicked!")}>Logout</StyledItem>
        </StyledContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const StyledButton = styled.button`
  padding: 10px 20px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const StyledContent = styled(DropdownMenu.Content)`
  background: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  padding: 8px;
`;

const StyledItem = styled(DropdownMenu.Item)`
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
  &:hover {
    background: #f0f0f0;
  }
`;

const StyledSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  background: #ddd;
  margin: 4px 0;
`;
