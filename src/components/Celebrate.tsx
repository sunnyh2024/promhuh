import img1 from "../assets/IMG_1740.png";
import img2 from "../assets/IMG_2856.png";
import img3 from "../assets/IMG_2870.png";
import img4 from "../assets/IMG_3722.png";

export default function Celebrate() {
  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 text-slate-50">
      <div className="absolute top-0 right-0">
        <img src={img3} className="scale-[0.6]" />
      </div>
      <div>
        <img src={img1} className="scale-70 -ml-20" />
      </div>

      <img src={img2} className="scale-50 -mt-32 ml-20" />

      <img src={img4} className="scale-50 -ml-16" />
      <div className="absolute left-[47%] text-6xl mt-12">YAYYYY 🥰</div>
      <div className="absolute top-[70%] text-6xl ml-12">🥳🥳</div>
    </div>
  );
}
