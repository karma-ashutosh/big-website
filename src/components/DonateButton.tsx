import { useState } from "react";

interface DonationButtonProps {
    donationButtonText?: string;
    customClass?: string;
}
export const DonationButton: React.FC<DonationButtonProps> = (props: DonationButtonProps) => {
    const resolvedDonationButton = {
        customClass: props.customClass ?? "",
        donationButtonText: props.donationButtonText ?? "DONATE",
    }
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Donate Button */}
            <button
                className={`"
          bg-orange-500
          text-white
          font-bold
          rounded-md
          px-4
          py-2
          hover:bg-orange-600
          focus:ring-2
          focus:ring-orange-300
          transition-colors
        ${resolvedDonationButton.customClass}"`}
                onClick={() => setIsOpen(true)}
            >
                {resolvedDonationButton.donationButtonText}
            </button>

            {/* Modal */}
            {isOpen && (
                <div
                    className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black
            bg-opacity-50
          "
                >
                    <div
                        className="
              relative
              w-11/12
              max-w-md
              bg-white
              rounded-lg
              shadow-lg
              p-5
              sm:p-6
            "
                    >
                        {/* Close button (X) */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="
                absolute
                top-3
                right-3
                text-gray-500
                hover:text-gray-700
                text-xl
                font-bold
              "
                        >
                            &times;
                        </button>

                        {/* Modal Title and Body */}
                        <div className="flex flex-col items-center">
                            <h2 className="text-lg font-semibold text-gray-700 mb-4">
                                Ashutosh Vishwakarma
                            </h2>

                            <img
                                src="https://storage.googleapis.com/big-website-assets/payments/payment_upi.webp"
                                alt="UPI Payment QR Code"
                                className="w-48 h-48 object-cover rounded-md border border-gray-300"
                            />

                            <p className="text-sm text-gray-700 mt-4">
                                <strong>UPI ID:</strong> karmav44990-1@okaxis
                            </p>
                            <p className="text-xs text-gray-500">
                                Scan to pay with any UPI app
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default DonationButton;
