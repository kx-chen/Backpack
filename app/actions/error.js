import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';

function displayError(message) {
  const MySwal = withReactContent(Swal);

  MySwal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Something went wrong.',
    text: message,
    showConfirmButton: true,
    backdrop: false
  });
}

// Will add more errors later.
// eslint-disable-next-line import/prefer-default-export
export { displayError };
