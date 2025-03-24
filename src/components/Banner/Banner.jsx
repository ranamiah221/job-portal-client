import { motion } from "motion/react"
import img1 from '../../assets/job.jpg'
import img2 from '../../assets/jobs.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                 <div className="flex-1">
                 <motion.img
                    src={img1}
                    animate={{y:[30, 0, 30], transition: {duration:5, repeat: Infinity}}}
                    className="w-50 border-4 border-black rounded-t-2xl border-r-0 border-b-0 rounded-bl-2xl shadow-2xl " />
                    <motion.img
                    src={img2}
                    animate={{x:[100, 130, 100], transition: {duration:5, repeat: Infinity}}}
                    className="w-50 border-4 border-black rounded-b-2xl border-t-0 border-l-0 rounded-tr-2xl shadow-2xl " />
                 </div>
                <div className="flex-1">
                    <motion.h1 animate={{ x: [50,0,50], transition: { duration:2, repeat: Infinity ,}}}  className="text-5xl font-bold">Latest <motion.span animate={{color:['#ffa833','#607b61','#ff3688 '], transition:{duration:1.5, repeat:Infinity}}}>Job</motion.span> For You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;