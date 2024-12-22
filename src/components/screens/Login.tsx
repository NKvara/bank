import { FormEvent, useState } from 'react';
import { Location, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '~/components/auth/AuthProvider';
import HandPhone from '~/assets/img/hand-phone.svg';
import OtpInput from 'react-otp-input';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const [user, setUser] = useState('');
  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState('');

  type LocationState = {
    from?: Location;
  };
  const from = (location.state as LocationState)?.from?.pathname || '/';

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const currUser = user || 'sample_user';
    auth.signin(currUser, () => {
      // Sends the user back to the page he tried to visit
      // when he was redirected to the login page.
      navigate(from, { replace: true });
    });
  }

  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-center items-center w-[50%] bg-blue-600 h-screen">
        <div className="flex flex-col gap-8 max-w-lg text-center">
          <img className="" src={HandPhone} />
          <span className="text-2xl text-gray-50">Do aliqua labore dolore labore tempor consectetur ullamco.</span>
          <span className="text-base text-gray-50">
            Elit et ex reprehenderit dolore consequat sunt exercita tempor consectetur ullamco.
          </span>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-[50%] bg-white h-screen">
        {step === 1 ? (
          <div className="flex flex-col text-left gap-4">
            <span className="text-3xl font-bold w-[25rem]">Log in</span>
            <span>Account Number</span>
            <input onChange={(o) => setUser(o.target.value)} className="input input-bordered w-full" />
            <span>Password</span>
            <input type="password" className="input input-bordered w-full" />
            <button type="button" onClick={() => setStep(2)} className="btn">
              Log In
            </button>
            <a className="text-teal-500">Forgot Password?</a>
          </div>
        ) : (
          <div className="flex flex-col w-[420px] gap-8">
            <span className="text-3xl font-bold">Verify your account</span>
            <span>We&apos;ve just sent a text message with your security code on the number +45 ** ** ** 89.</span>
            <span>Please enter the code in order to continue.</span>
            <div className="flex justify-center">
              <OtpInput
                inputStyle={{
                  border: '1px solid',
                  borderRadius: '4px',
                  margin: '0 8px',
                  fontSize: '1.5rem',
                  height: '3rem',
                  width: '2.5rem',
                }}
                value={otp}
                inputType="tel"
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
              />
            </div>
            <button type="submit" className="btn">
              Verify
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
