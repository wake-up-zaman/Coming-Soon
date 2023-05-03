import { toast } from 'react-toastify';

//bug: message and variant didn't take right place according to passing arguments  
const hitToast = (message,variant) => {
    if (!['success', 'error'].includes(variant)) throw Error();
    toast[`${variant}`](message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
export default hitToast;