import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Màn chờ ngắn khi tải trang lần đầu — đóng vai trò "hero reveal" ban đầu,
 * thay vì để nội dung hiện đột ngột. Tự ẩn sau khi DOM ổn định.
 */
export function PageLoader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              className="h-10 w-10 rounded-full border border-champagne/30 border-t-champagne"
            />
            <span className="label-eyebrow">Dynk</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
