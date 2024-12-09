import { useFormStatus } from 'react-dom';
import { submitForm } from './action';

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="bg-blue-600 text-white p-2 rounded font-semibold"
    >
      {pending ? 'Submitting..' : 'Submit'}
    </button>
  );
}

const UseFormStatus = () => {
  return (
    <div>
      <form action={submitForm}>
        <Submit />
      </form>
    </div>
  );
};

export default UseFormStatus;
