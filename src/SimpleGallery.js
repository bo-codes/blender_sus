import { useEffect, useState } from "react";
import { galleries } from "./Galleries";
import BulletListOption from "./BulletListOption";
import "./SimpleGallery.css";

const { gallery1, gallery2 } = galleries;

export default function SimpleGallery() {
  const [currSeries, setCurrSeries] = useState(gallery1);
  const [currBullet, setCurrBullet] = useState(gallery1);
  const [currKuromiPNG, setCurrKuromiPNG] = useState(gallery1.gallery[0].img);
  const [currKwanPNG, setCurrKwanPNG] = useState(gallery2.gallery[0].img);
  const [currKuromiColor, setCurrKuromiColor] = useState(
    currSeries.gallery[0].id
  );
  const [transitionsOn, setTransitionsOn] = useState(false);
  const [currKwanColor, setCurrKwanColor] = useState(currSeries.gallery[0].id);

  const onColorClick = (PNG) => {
    if (currSeries.id === 1) {
      setCurrKuromiPNG(PNG.img);
      setCurrKuromiColor(PNG.id);
    } else if (currSeries.id === 2) {
      setCurrKwanPNG(PNG.img);
      setCurrKwanColor(PNG.id);
    }
  };

  const onSeriesClick = (id) => {
    setCurrBullet(id)
    setTimeout(() => {
      setCurrSeries(id);
    }, 1000)
    const el1 = document.getElementById("imgs-and-desc-animated");
    const el2 = document.getElementById("imgs-and-desc-animated2");
    el1.style.animation = "slideInDown 2s forwards";
    el2.style.animation = "slideOutUp 2s forwards";

    el1.addEventListener(
      "animationend",
      (e) => (e.target.style.animation = "slideInDownAfter 1s forwards")
    );
    el2.addEventListener(
      "animationend",
      (e) => (e.target.style.animation = "slideOutUpAfter 1s forwards")
    );
  };

  useEffect(() => {
    setTransitionsOn(true)
  }, [currSeries]);

  useEffect(() => {
    document.getElementById("imgs-and-desc-animated2").style.visibility = 'hidden';
  }, []);

  const lorem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque ";

  return currSeries ? (
    <div id="gallery">
      <div id="series-choices-and-imgs">
        <div id="series-choices-container">
          <div id="series-choices">
            {Object.values(galleries).map((gallery, i) => {
              return (
                <div onClick={() => onSeriesClick(gallery)} key={i}>
                  <BulletListOption
                    text={gallery.series}
                    selectedBullet={currSeries.id}
                    optionID={gallery.id}
                    transitionsOn={transitionsOn}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* KUROMI IS CHOSEN */}
        {currSeries.id === 1 ? (
          <>
            <div id="imgs-and-desc-animated">
              <div id="img-and-choices">
                <img id="img" src={currKuromiPNG} />
                <div id="img-choices">
                  {gallery1.gallery.map((PNG, i) => {
                    return (
                      <div
                        onClick={() => onColorClick(PNG)}
                        key={i}
                        className="img-choice"
                        id={
                          PNG.id === currKuromiColor
                            ? "selected-img-choice"
                            : "img-choice"
                        }
                        style={{ backgroundColor: PNG.color }}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div id="img-plaque-container">
                <div id="img-plaque">
                  <div id="img-series-num">{`Series ${currSeries.id}`}</div>
                  <div id="img-series-title">{`${currSeries.series} Series`}</div>
                  <div id="img-desc">{lorem}</div>
                </div>
              </div>
            </div>
            <div id="imgs-and-desc-animated2">
              <div id="img-and-choices">
                <img id="img" src={currKwanPNG} />
                <div id="img-choices">
                  {currSeries.gallery.map((PNG, i) => {
                    return (
                      <div
                        onClick={() => onColorClick(PNG)}
                        key={i}
                        className="img-choice"
                        id={
                          PNG.id === currKwanColor
                            ? "selected-img-choice"
                            : "img-choice"
                        }
                        style={{ backgroundColor: PNG.color }}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div id="img-plaque-container">
                <div id="img-plaque">
                  <div id="img-series-num">{`Series ${currSeries.id}`}</div>
                  <div id="img-series-title">{`${currSeries.series} Series`}</div>
                  <div id="img-desc">{lorem}</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          // KWAN IS CHOSEN
          <>
            <div id="imgs-and-desc-animated">
              <div id="img-and-choices">
                <img id="img" src={currKwanPNG} />
                <div id="img-choices">
                  {currSeries.gallery.map((PNG, i) => {
                    return (
                      <div
                        onClick={() => onColorClick(PNG)}
                        key={i}
                        className="img-choice"
                        id={
                          PNG.id === currKwanColor
                            ? "selected-img-choice"
                            : "img-choice"
                        }
                        style={{ backgroundColor: PNG.color }}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div id="img-plaque-container">
                <div id="img-plaque">
                  <div id="img-series-num">{`Series ${currSeries.id}`}</div>
                  <div id="img-series-title">{`${currSeries.series} Series`}</div>
                  <div id="img-desc">{lorem}</div>
                </div>
              </div>
            </div>
            <div id="imgs-and-desc-animated2">
              <div id="img-and-choices">
                <img id="img" src={currKuromiPNG} />
                <div id="img-choices">
                  {gallery1.gallery.map((PNG, i) => {
                    return (
                      <div
                        onClick={() => onColorClick(PNG)}
                        key={i}
                        className="img-choice"
                        id={
                          PNG.id === currKuromiColor
                            ? "selected-img-choice"
                            : "img-choice"
                        }
                        style={{ backgroundColor: PNG.color }}
                      ></div>
                    );
                  })}
                </div>
              </div>
              <div id="img-plaque-container">
                <div id="img-plaque">
                  <div id="img-series-num">{`Series ${currSeries.id}`}</div>
                  <div id="img-series-title">{`${currSeries.series} Series`}</div>
                  <div id="img-desc">{lorem}</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  ) : (
    <div id="gallery">
      <div id="series-choices-and-imgs">
        <div id="series-choices-container">
          <div id="series-choices">
            {Object.values(galleries).map((gallery, i) => {
              return (
                <div onClick={() => onSeriesClick(gallery)} key={i}>
                  <BulletListOption
                    text={gallery.series}
                    selectedBullet={currBullet.id}
                    optionID={gallery.id}
                    transitionsOn={transitionsOn}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div id="imgs-and-desc">
          <div id="img-and-choices">
            {currSeries.id === 1 ? (
              <img id="img" src={currKuromiPNG} />
            ) : (
              <img id="img" src={currKwanPNG} />
            )}
            {currSeries.id === 1 ? (
              <div id="img-choices">
                {currSeries.gallery.map((PNG, i) => {
                  return (
                    <div
                      onClick={() => onColorClick(PNG)}
                      key={i}
                      className="img-choice"
                      id={
                        PNG.id === currKuromiColor
                          ? "selected-img-choice"
                          : "img-choice"
                      }
                      style={{ backgroundColor: PNG.color }}
                    ></div>
                  );
                })}
              </div>
            ) : (
              <div id="img-choices">
                {currSeries.gallery.map((PNG, i) => {
                  return (
                    <div
                      onClick={() => onColorClick(PNG)}
                      key={i}
                      className="img-choice"
                      id={
                        PNG.id === currKwanColor
                          ? "selected-img-choice"
                          : "img-choice"
                      }
                      style={{ backgroundColor: PNG.color }}
                    ></div>
                  );
                })}
              </div>
            )}
          </div>
          <div id="img-plaque-container">
            <div id="img-plaque">
              <div id="img-series-num">{`Series ${currSeries.id}`}</div>
              <div id="img-series-title">{`${currSeries.series} Series`}</div>
              <div id="img-desc">{lorem}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
