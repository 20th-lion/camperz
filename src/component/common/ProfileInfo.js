import styled, { css } from 'styled-components';
import palette from "../../lib/styles/palette";

export const ProfileBackground = styled.div`
  display: block;
  background-color: ${palette.background[0]};
  margin-bottom: 6px;
  width: 390px;
`;

export const ProfileInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px 26px;
`;

export const ProfileImg = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 50%;
  margin-bottom: 16px;
  object-fit: cover;
`;

export const UserName = styled.strong`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5px;
`;

export const AccountName = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
  margin-bottom: 16px;
`;

export const Intro = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #767676;
  margin-bottom: 24px;
`;

export const Follow = styled.a`
  display: block;
  position: absolute;
  top: 67px;
  text-align: center;
  cursor: pointer;
  left: ${(props) => (props.position === 'right' ? '287px' : '56px')};
`;

export const FollowCount = styled.strong`
  display: block;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: ${palette.followcount[0]};
`;

export const FollowSpan = styled.span`
  font-weight: 400;
  font-size: 8px;
  line-height: 9px;
  color: ${palette.accountname[0]};
`;

export const ProfileBtnWrap = styled.div`
  display: flex;
`;

export const ProfileBtnIcon = styled.button`
  display: flex;
  align-items: center;
  width: 34px;
  height: 34px;
  border: 1px solid ${palette.ProfileBtnIcon[0]};
  border-radius: 50%;
  background-color: ${palette.background[0]};
  margin-right: 10px;
  margin-left: 10px;
`;