import { SportsHockeyRounded } from "@material-ui/icons";
import React from "react"
import styled from "styled-components"
import { movies } from "./data";

const Movies = () =>{
    return (
        <div>
            <TvBorder></TvBorder>
        <Wrapper>
            <Stars></Stars>
            <h1>Movies</h1>
            <Videos>
                {
                    movies.map((movie)=>{
                        return(
                            <Video>
                                <Iframe src={movie.link} title={movie.title}
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></Iframe>
                                <VideoDescription>
                                    <h2>{movie.title}</h2>
                                    <p>{movie.creator}</p>
                                </VideoDescription>
                            </Video>
                        )
                    })
                }
            </Videos>
        </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    color: #cf1322;
    width: 100vw;
    height: 100vh;
    background-color: black;
    overflow-y: auto;
    h1{
        margin-top: 10vh;
        text-align: center;
        font-size: 5em;
    }
    h1, p, h2{
        font-family: 'Kdam Thmor Pro';
    }
`;
const TvBorder = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(https://dwvo2npct47gg.cloudfront.net/images/border-stretched-2.png);
    background-size: 100% 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    pointer-events: none;
`;
const Videos = styled.div`
    display: block;
`;
const Stars = styled.div`
    box-shadow: 1061px 816px #fff, 1570px 524px #fff, 365px 73px #fff, 811px 1180px #fff, 598px 1704px #fff, 1642px 1425px #fff, 1529px 747px #fff, 1575px 1198px #fff, 1073px 1821px #fff, 1833px 1322px #fff, 1532px 207px #fff, 240px 1125px #fff, 1379px 1573px #fff, 1492px 886px #fff, 1845px 1831px #fff, 1034px 772px #fff, 1840px 986px #fff, 347px 1338px #fff, 1737px 1023px #fff, 1362px 238px #fff, 978px 940px #fff, 287px 352px #fff, 472px 1337px #fff, 1336px 220px #fff, 806px 1129px #fff, 1769px 1000px #fff, 1444px 268px #fff, 387px 1038px #fff, 1086px 488px #fff, 4px 895px #fff, 790px 269px #fff, 325px 220px #fff, 1798px 1853px #fff, 637px 269px #fff, 597px 793px #fff, 873px 301px #fff, 613px 169px #fff, 700px 254px #fff, 1369px 316px #fff, 1313px 842px #fff, 281px 1512px #fff, 1896px 1334px #fff, 1462px 1012px #fff, 64px 352px #fff, 1809px 1799px #fff, 368px 1031px #fff, 623px 2px #fff, 891px 205px #fff, 1639px 673px #fff, 1163px 463px #fff, 1603px 901px #fff, 864px 1108px #fff, 766px 87px #fff, 1272px 1392px #fff, 650px 711px #fff, 89px 676px #fff, 555px 1356px #fff, 1780px 625px #fff, 751px 1759px #fff, 1927px 1473px #fff, 1598px 24px #fff, 820px 1751px #fff, 1370px 1055px #fff, 1160px 1968px #fff, 98px 1811px #fff, 406px 891px #fff, 1905px 1719px #fff, 1168px 362px #fff, 561px 1709px #fff, 1345px 737px #fff, 1102px 581px #fff, 1488px 1150px #fff, 1918px 1280px #fff, 594px 1472px #fff, 115px 116px #fff, 204px 1376px #fff, 1844px 1431px #fff, 1899px 1940px #fff, 185px 884px #fff, 1465px 723px #fff, 1946px 1694px #fff, 714px 1048px #fff, 1583px 1706px #fff, 1870px 1926px #fff, 259px 271px #fff, 1090px 531px #fff, 518px 1938px #fff, 987px 125px #fff, 1539px 1804px #fff, 1819px 438px #fff, 1201px 1775px #fff, 1567px 1099px #fff, 926px 1660px #fff, 498px 913px #fff, 458px 1546px #fff, 1853px 336px #fff, 302px 85px #fff, 206px 1141px #fff, 182px 907px #fff, 233px 1464px #fff;
    position: absolute;
    width: 3px;
    height: 3px;
    background: transparent;
    animation: animStar 120s linear infinite;
`
const Video = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
    &:last-child {
        margin-bottom: 20vh;
    }
    @media screen and (max-width: 900px) {
        width: 100%;
        flex-direction: column;
        iframe{
            width: 70vw;
            margin-bottom: 10px;
            min-height: 80%;
        }
    }
    
`;
const Iframe = styled.iframe`
    border: 2px solid #cf1322;
    overflow: hidden;
    opacity: 0.95;
    width: 30vw;
    cursor: pointer;
    height: 25vh;

`
const VideoDescription = styled.div`
    font-family: 'Press Start 2P', monospace;
    font-weight: normal;
    font-size: 1em;
    margin: 35px;
    text-shadow: 0 2px 1px rgb(64 255 220 / 80%);
    width: 30%;
    display:block;
    text-align:center;
    h2{
        font-size: 2em;
    }
    p{
        line-height: 200%;
    }
`;
export default Movies