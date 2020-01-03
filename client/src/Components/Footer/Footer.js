import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const Footer = styled.footer`
  padding: 0 0 1px;
  background: ${props =>
    props.pathname === "/media" ? "tranparent" : "#1c1c1c"};
  * {
    z-index: 2;
  }
`;
const Container = styled.div`
  max-width: 1162px;
  width: 1162px;
  margin: auto;
`;
const Copy = styled.div`
  width: 100%;
  text-align: left;
  display: block;
  color: #a6a6a6;
  font-size: 16px;
  padding-top: 30px;
  padding-bottom: 10px;
  p {
    border-top: 1px solid #333;
    padding-top: 4px;
    margin-top: 2px;
    margin-bottom: 1rem;
  }
`;
export default withRouter(({ location }) => {
  console.log(location.pathname);
  return (
    <Footer pathname={location.pathname}>
      <Container>
        <Copy>
          <span>
            1 Yishun Industrial Street 1, #06-30 A'Posh Bizhub, Singapore 768160
          </span>
          <p>
            <span>Copyright@2018 Numbers21 PTE. LTD All Rights Reserved.</span>
            {/* <span style="display:inline-block;">
              <a href="PDF.aspx?file=user-terms" target="_blank" class="pdf">
                User Terms
              </a>
              <a
                href="PDF.aspx?file=privacy-policy"
                target="_blank"
                class="pdf"
              >
                Privacy Policy
              </a>
            </span> */}
          </p>
        </Copy>
      </Container>
    </Footer>
  );
});
