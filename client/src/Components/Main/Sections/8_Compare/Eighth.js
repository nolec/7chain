import React, { useContext } from "react";
import styled from "styled-components";
import { device } from "../../../../device";
import LangContext from "../../../../Context";

const Section = styled.section`
  ${props => props.theme.style.SectionStyle(40, 120)};
  ${device.PC768`padding-bottom: 15%;`};
`;
const Container = styled.div`
  ${props => props.theme.style.ContainerStyle(1260, 1162)}
`;
const Hbox = styled.div`
  ${props => props.theme.style.Hbox2Style(0, props.theme.file.arr)};
  ${device.PC450`font-size : 20px;`}
  p {
    margin: 25px 0 0 0 !important;
    color: #fff;
    font-size: 20px;
    ${device.PC768`font-size : 18px;`}
    ${device.PC450`font-size: 14px;`}
  }
`;
const TableBox = styled.div``;
const Table = styled.table`
  width: 100%;
  margin: 40px auto 0;
  border-collapse: collapse;
  border-top: 5px solid #a9dede;
  ${device.PC580`border-top: none;
    border-right: none; margin-top : 20px;`}
  * {
    ${device.PC580`display: block !important;`}
  }

  tr {
    display: table-row;
    vertical-align: middle;
    border-color: inherit;
    ${device.PC580`    border: 1px solid #ccc;
    margin-top: 2em;`}
  }
  thead {
    ${device.PC580`display: none !important;`}
  }
  thead th {
    color: #eee;
    text-align: center;
    width: 16.5%;
    height: 65px;
    ${device.PC992`height : 50px; font-size : 14px;`}
    font-size: 20px;
    vertical-align: middle;
    font-weight: bold;
    ${device.PC768`height : 45px; font-size : 10px;`}
  }
  tbody td {
    display: table-cell;
    vertical-align: middle;
    color: #fff;
    background: #393939;
    text-align: center;
    border: 1px solid #888888;
    height: 65px;
    ${device.PC992`height : 45px; font-size : 11px;`}
    font-size: 15px;
    ${device.PC768`height : 40px; font-size : 9px;`}
    ${device.PC580`border: 1px solid #888888;
    position: relative;
    padding-left: 45%;
    height: 45px;
    padding-top: 10px;`}
    &.column1 {
      color: #fff;
      background: #393939;
      font-weight: normal;
      ${device.PC580`    
      color: #fff;
      background: #515151;
      padding: 11px 0 0 0;
      font-size: 15px;`}
    }
    span {
      ${device.PC580`text-align: center;width: 100%;`};
    }
    ::before {
      ${device.PC580`
    position: absolute;
    top: 13px;
    left: 6px;
    width: 45%;
    padding-right: 10px;
    `}
    }
    &:nth-of-type(2)::before {
      ${device.PC580`
      content: "Funfair";
    font-size: 13px;`}
    }
    &:nth-of-type(3)::before {
      ${device.PC580`
      content: "Edgeless";
    font-size: 13px;`}
    }
    &:nth-of-type(4)::before {
      ${device.PC580`
      content: "CoinPoker";
    font-size: 13px;`}
    }
    &:nth-of-type(5)::before {
      ${device.PC580`
      content: "SP8DE";
    font-size: 13px;`}
    }
    &:nth-of-type(6)::before {
      ${device.PC580`
      content: "7Chain";
    font-size: 13px;`}
    }
    img {
      margin: auto;
    }
  }
  .brg {
    position: relative;
    background: #464b4b;
    ::after {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: -1px;
      width: calc(100% + 2px);
      height: 65px;
      ${device.PC992`height : 45px;`}
      border: 1px solid #a9dede;
      ${device.PC768`height : 40px;`}
    }
  }
  .m-text br {
    ${device.PC768`display : none !important;`}
  }
`;
export default () => {
  const check = require("../../../../assets/images/bullet-check-s2.png");
  const bulletX = require("../../../../assets/images/bullet-x-s.png");
  const triangle = require("../../../../assets/images/bullet-triangle2.png");

  const { lang } = useContext(LangContext);
  return (
    <Section>
      <Container>
        <Hbox>
          <h3>{lang.compare01}</h3>
          <p>{lang.compare02}</p>
        </Hbox>
        <TableBox>
          <Table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Funfair</th>
                <th>Edgeless</th>
                <th>CoinPoker</th>
                <th>SP8DE</th>
                <th>7Chain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="column1">
                  <span id="lblComparison007">{lang.compare03}</span>
                </td>
                <td>
                  <span id="lblComparison008">ERC-20/ETH</span>
                </td>
                <td>
                  <span id="lblComparison009">ERC-20/ETH</span>
                </td>
                <td>
                  <span id="lblComparison010">ERC-20/ETH</span>
                </td>
                <td>
                  <span id="lblComparison011">ERC-20/ADA</span>
                </td>
                <td>
                  <span id="lblComparison012">EOS</span>
                </td>
              </tr>
              <tr>
                <td className="column1">
                  <span id="lblComparison013">{lang.compare04}</span>
                </td>
                <td className="brg">
                  <img src={check} alt="Support" />
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="m-text">
                  <img src={triangle} alt="Unclear" />
                  <br />
                  <span id="lblComparison014" className="f12">
                    Unclear
                  </span>
                </td>
                <td className="brg">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td className="column1">
                  <span id="lblComparison015">{lang.compare05}</span>
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="brg">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td className="column1">
                  <span id="lblComparison016">{lang.compare06}</span>
                </td>
                <td className="m-text">
                  <img src={triangle} alt="Not proven" />
                  <br />
                  <span id="lblComparison017" className="f12">
                    Unproven
                  </span>
                </td>
                <td className="m-text">
                  <img src={triangle} alt="Not Transparent" />
                  <br />
                  <span id="lblComparison018" className="f12">
                    Untransparent
                  </span>
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="m-text">
                  <img src={triangle} alt="Not Implement" />
                  <br />
                  <span id="lblComparison019" className="f12">
                    Not Implemented
                  </span>
                </td>
                <td className="brg">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td className="column1">
                  <span id="lblComparison020">{lang.compare07}</span>
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="brg">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td className="column1 animated fadeIn">
                  <span id="lblComparison021">{lang.compare08}</span>
                </td>
                <td className="m-text animated fadeIn">
                  <img src={triangle} alt="Not proven" />
                  <br />
                  <span id="lblComparison022" className="f12">
                    Unproven
                  </span>
                </td>
                <td className="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="m-text animated fadeIn">
                  <img src={triangle} alt="Not Implement" />
                  <br />
                  <span id="lblComparison023" className="f12">
                    Not Implemented
                  </span>
                </td>
                <td className="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td className="column1 animated fadeIn">
                  <span id="lblComparison030">{lang.compare09}</span>
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td className="column1 animated fadeIn">
                  <span id="lblComparison024">{lang.compare10}</span>
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td className="column1 animated fadeIn">
                  <span id="lblComparison025">{lang.compare11}</span>
                </td>
                <td className="m-text animated fadeIn">
                  <img src={triangle} alt="Not proven" />
                  <br />
                  <span id="lblComparison026" className="f12">
                    Unproven
                  </span>
                </td>
                <td className="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="m-text animated fadeIn">
                  <img src={triangle} alt="Not Implement" />
                  <br />
                  <span id="lblComparison027" className="f12">
                    Not Implemented
                  </span>
                </td>
                <td className="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td className="column1 animated fadeIn">
                  <span id="lblComparison028">{lang.compare12}</span>
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
                <td className="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
                <td className="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td className="brg last animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
              </tr>
            </tbody>
          </Table>
        </TableBox>
      </Container>
    </Section>
  );
};
