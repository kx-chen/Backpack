import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

function displayError(message) {
  const error = withReactContent(Swal);

  error.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Something went wrong.',
    text: message,
    showConfirmButton: true,
    backdrop: false
  });
}

function displayDownloadStartAlert() {
  const downloadStart = withReactContent(Swal);

  downloadStart.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Download started.',
    showConfirmButton: true,
    backdrop: false
  });
}

function displayDownloadFinished() {
  const downloadStart = withReactContent(Swal);

  downloadStart.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Download success!',
    showConfirmButton: true,
    backdrop: false
  });
}

export { displayError, displayDownloadStartAlert, displayDownloadFinished };
