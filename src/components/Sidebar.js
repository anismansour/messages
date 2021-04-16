import React from 'react';
import styled from 'styled-components';
import CreateIcon from '@material-ui/icons/Create';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SideBarOption from './SideBarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import DraftsIcon from '@material-ui/icons/Drafts';
import GroupIcon from '@material-ui/icons/Group';
import AppsIcon from '@material-ui/icons/Apps';
import AttachFileIcon from '@material-ui/icons/AttachFile';

function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2> Messages</h2>

          <h3>
            {' '}
            <FiberManualRecordIcon /> Anis M
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SideBarOption Icon={InsertCommentIcon} title="Thread" />
      <SideBarOption Icon={DraftsIcon} title="Saved" />
      <SideBarOption Icon={GroupIcon} title="Groups" />
      <SideBarOption Icon={AppsIcon} title="Apps" />
      <SideBarOption Icon={AttachFileIcon} title="File Browser" />
    </SidebarContainer>
  );
}

export default Sidebar;
const SidebarContainer = styled.div`
  color: white;
  background-color: var(--message-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
`;
const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 99px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1px;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
