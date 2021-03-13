import React from 'react'

import styled from '@emotion/styled';

export const ButtonSolid = styled.button`
  background-color: ${({ theme }) => theme.palette.colors.accent1};
  border: none;
  border-radius: 2px;
  padding: 8px 16px;
  margin: 8px;
  font-size: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.colors.white};
  min-width: 140px;
  min-height: 60px;
`;

export const ButtonRegular = styled.button`
  border: 2px solid ${({ theme }) => theme.palette.colors.accent1};
  border-radius: 2px;
  background-color: ${({ theme }) => theme.palette.colors.blackTransparent};
  padding: 8px 16px;
  margin: 8px;
  font-size: 16px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.colors.accent2};
  min-width: 140px;
  min-height: 60px;
`;

export const Text = styled.div`
  margin: auto;
  max-width: 600px;
  color: ${({ theme }) => theme.palette.colors.accent2};

  b {
    color: ${({ theme }) => theme.palette.colors.accent4};
  }

  em {
    color: ${({ theme }) => theme.palette.colors.accent6};
    background-color: ${({ theme }) => theme.palette.colors.accent9};
  }

  i {
    color: ${({ theme }) => theme.palette.colors.accent3};
    background-color: ${({ theme }) => theme.palette.colors.accent7};
  }

  a {
    color: ${({ theme }) => theme.palette.colors.accent1};
  }

`;

export const content = <>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem et tortor consequat id porta nibh venenatis. Faucibus pulvinar <b>elementum integer enim neque</b>. Dui faucibus in ornare quam viverra orci sagittis. Cras tincidunt lobortis feugiat vivamus at augue. Posuere ac ut consequat semper viverra nam libero. Tincidunt id aliquet risus feugiat in ante metus dictum at. <i>Nulla aliquet porttitor lacus luctus accumsan</i> tortor posuere ac ut. Molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Risus nullam eget felis eget nunc lobortis mattis. Rutrum quisque non tellus orci ac auctor. At consectetur lorem donec massa sapien faucibus et. Euismod lacinia at quis risus sed vulputate. Nullam eget felis eget nunc lobortis mattis aliquam faucibus purus. Magna fermentum iaculis eu non diam.</p>

  <p>Non quam lacus suspendisse faucibus interdum posuere lorem ipsum. Eget mi proin sed libero enim sed faucibus turpis. Leo integer malesuada nunc <em>vel risus commodo viverra</em> maecenas accumsan. Molestie at elementum eu facilisis. Vulputate sapien nec sagittis aliquam. Neque ornare aenean euismod elementum nisi quis. Ultrices <a href="https://github.com/UsulPro">neque ornare aenean euismod</a> elementum. Ut eu sem integer vitae justo eget magna fermentum. Scelerisque eu ultrices vitae auctor eu augue ut. Fermentum dui faucibus in ornare quam viverra. Pharetra massa massa ultricies mi. Lorem ipsum dolor sit amet consectetur adipiscing.</p>

  <p>Felis donec et odio pellentesque diam volutpat commodo sed egestas. Mauris in aliquam sem fringilla ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Orci sagittis eu volutpat odio facilisis mauris. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Ornare suspendisse sed nisi lacus sed viverra. Sit amet est placerat in egestas erat imperdiet sed. Vel pretium lectus quam id. Id leo in vitae turpis massa sed elementum. Diam sollicitudin tempor id eu. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Cum sociis natoque penatibus et magnis dis parturient.</p>
</>