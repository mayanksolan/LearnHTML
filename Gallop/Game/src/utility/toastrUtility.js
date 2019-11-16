import toastr from 'toastr'

toastr.options ={
    closeButton:true,
    closeMethod:'fadeOut',
    closeDuration:300,
    showEasing:'swing',
    hideEasing:'linear',
    closeEasing:'linear',
    showMethos:'slideDown',
    newestOnTop:true,
    preventDuplicates:true,
    timeOut:2000,
    extendedTimeOut:5000,
    progressBar:true,
    positionClass:'toast-top-right'

};

export default toastr;