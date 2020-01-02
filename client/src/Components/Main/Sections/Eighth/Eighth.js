import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 120px;
  overflow: hidden;
`;
const Container = styled.div`
  max-width: 1162px;
  font-size: 0;
  margin: auto;
`;
const Hbox = styled.div`
  position: relative;
  margin-bottom: 0;
  font-size: 30px;
  h3 {
    color: #a7dede;
    ::before {
      display: inline-block;
      content: "";
      width: 7px;
      height: 22px;
      margin-right: 10px;
      background: url(${require("../../../../assets/images/ico_arr_r.png")}) 50%
        70% no-repeat;
    }
  }
  p {
    margin: 25px 0 0 0;
    color: #fff;
    font-size: 20px;
  }
`;
const TableBox = styled.div``;
const Table = styled.table`
  width: 100%;
  margin: 40px auto 0;
  border-collapse: collapse;
  border-top: 5px solid #a9dede;
  tr {
    display: table-row;
    vertical-align: middle;
    border-color: inherit;
  }
  thead th {
    color: #eee;
    text-align: center;
    width: 16.5%;
    height: 65px;
    font-size: 20px;
    vertical-align: middle;
    font-weight: bold;
  }
  tbody td {
    display: table-cell;
    vertical-align: middle;
    color: #fff;
    background: #393939;
    text-align: center;
    border: 1px solid #888888;
    height: 65px;
    font-size: 15px;
  }
  .column1 {
    color: #fff;
    background: #393939;
    font-weight: normal;
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
      border: 1px solid #a9dede;
    }
  }
`;
export default () => {
  const check = require("../../../../assets/images/bullet-check-s2.png");
  const bulletX = require("../../../../assets/images/bullet-x-s.png");
  const triangle = require("../../../../assets/images/bullet-triangle2.png");
  return (
    <Section>
      <Container>
        <Hbox>
          <h3>경쟁 프로젝트와 비교</h3>
          <p>
            7Chain 팀이 세계 최초로 구현한 탈중앙화 RNG 기술은 이미 국제 PCT
            특허 출원으로 보호되고 있습니다. 실제 블록체인 네트워크에서 작동되는
            게임을 공개하면서 탈중앙화된 RNG 기술의 투명성과 공정성이 검증되고
            있으며, 실시간 온라인 게임에도 적용이 가능함을 증명하고 있습니다.
          </p>
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
                <td class="column1">
                  <span id="lblComparison007">암호화폐 형태</span>
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
                <td class="column1">
                  <span id="lblComparison013">게이밍 플랫폼</span>
                </td>
                <td class="brg">
                  <img src={check} alt="Support" />
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="m-text">
                  <img src={triangle} alt="Unclear" />
                  <br />
                  <span id="lblComparison014" class="f12">
                    Unclear
                  </span>
                </td>
                <td class="brg">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td class="column1">
                  <span id="lblComparison015">모든 기기 OS 지원</span>
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
                <td class="brg">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td class="column1">
                  <span id="lblComparison016">탈중앙화 RNG 구현</span>
                </td>
                <td class="m-text">
                  <img src={triangle} alt="Not proven" />
                  <br />
                  <span id="lblComparison017" class="f12">
                    Unproven
                  </span>
                </td>
                <td class="m-text">
                  <img src={triangle} alt="Not Transparent" />
                  <br />
                  <span id="lblComparison018" class="f12">
                    Untransparent
                  </span>
                </td>
                <td>
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="m-text">
                  <img src={triangle} alt="Not Implement" />
                  <br />
                  <span id="lblComparison019" class="f12">
                    Not Implemented
                  </span>
                </td>
                <td class="brg">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td class="column1">
                  <span id="lblComparison020">게이머의 RNG 참여</span>
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
                <td class="brg">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td class="column1 animated fadeIn">
                  <span id="lblComparison021">RNG 실시간 게임 적용</span>
                </td>
                <td class="m-text animated fadeIn">
                  <img src={triangle} alt="Not proven" />
                  <br />
                  <span id="lblComparison022" class="f12">
                    Unproven
                  </span>
                </td>
                <td class="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="m-text animated fadeIn">
                  <img src={triangle} alt="Not Implement" />
                  <br />
                  <span id="lblComparison023" class="f12">
                    Not Implemented
                  </span>
                </td>
                <td class="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td class="column1 animated fadeIn">
                  <span id="lblComparison030">암호화폐 없이 적용</span>
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td class="column1 animated fadeIn">
                  <span id="lblComparison024">멘탈 포커 알고리즘</span>
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td class="column1 animated fadeIn">
                  <span id="lblComparison025">거래 수수료 해결</span>
                </td>
                <td class="m-text animated fadeIn">
                  <img src={triangle} alt="Not proven" />
                  <br />
                  <span id="lblComparison026" class="f12">
                    Unproven
                  </span>
                </td>
                <td class="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="m-text animated fadeIn">
                  <img src={triangle} alt="Not Implement" />
                  <br />
                  <span id="lblComparison027" class="f12">
                    Not Implemented
                  </span>
                </td>
                <td class="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
              </tr>
              <tr>
                <td class="column1 animated fadeIn">
                  <span id="lblComparison028">상용제품 보유</span>
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
                <td class="brg animated fadeIn">
                  <img src={check} alt="Support" />
                </td>
                <td class="animated fadeIn">
                  <img src={bulletX} alt="Not Support" />
                </td>
                <td class="brg last animated fadeIn">
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
