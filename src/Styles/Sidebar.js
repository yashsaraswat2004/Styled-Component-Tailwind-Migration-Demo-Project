import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f0f2f5;
  position: fixed;
  top: 0;
  left: 0px;
  transition: left 0.3s ease-in-out;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  &.active {
    left: 0;
  }
`;

export const SidebarTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`;

export const SidebarListItem = styled.li`
  margin-bottom: 10px;
`;

export const SidebarLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #e6e6e6;
  }

  &.active {
    background-color: #1890ff;
    color: white;
  }
`;

export const HelperBox = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HelperIcon = styled.div`
  font-size: 20px;
  color: #1890ff;
`;

export const HelperText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

export const DividerLine = styled.hr`
  border: 0;
  border-top: 1px solid #d9d9d9;
  margin: 20px 0;
`;
