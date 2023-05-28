"use cleint"
import {motion as anim, AnimatePresence} from "framer-motion"
const Transition = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <anim.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1], y: -5}}
        exit={{ opacity: 0, y: -0}}
        transition={{
          duration: 1,
          times: [0, 0.5, 1],
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="overflow-hidden"
      >
        {children}
      </anim.div>
    </AnimatePresence>
  )
}

export default Transition;
