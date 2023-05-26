import './BulletListOption.css'

export default function BulletListOption({text, selectedBullet, optionID, transitionsOn}) {
  return transitionsOn ? (
    <div className="bullet-list-option">
      <div
        className={
          selectedBullet === optionID
            ? "bullet-list-option-bullet-selected-animated"
            : "bullet-list-option-bullet-animated"
        }
      ></div>
      <div
        className={
          selectedBullet === optionID
            ? "bullet-list-option-text-selected-animated"
            : "bullet-list-option-text-animated"
        }
      >
        {text}
      </div>
    </div>
  ) : (
    <div className="bullet-list-option">
      <div
        className={
          selectedBullet === optionID
            ? "bullet-list-option-bullet-selected"
            : "bullet-list-option-bullet"
        }
      ></div>
      <div
        className={
          selectedBullet === optionID
            ? "bullet-list-option-text-selected"
            : "bullet-list-option-text"
        }
      >
        {text}
      </div>
    </div>
  );
}
