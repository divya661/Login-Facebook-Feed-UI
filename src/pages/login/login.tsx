import React, { ChangeEvent, FormEvent, useState } from "react";

import { Logo } from "@/components/atoms/logo";
import { Text } from "@/components/atoms/text";
import { Card } from "@/components/molecules/card";
import { Input } from "@/components/molecules/input";
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH, USERNAME_Or_Email_MAX_LENGTH, USERNAME_Or_Email_MIN_LENGTH } from "@/constants/user";
import { validatePassword, validateUsernameOrEmail } from "@/utils/validate_login";
import { Button } from "@/components/molecules/button";
import { InputType } from "@/enums/input";
import { useRouter } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";


const Login = () => {
    const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorUsernameOrEmail, setErrorUsernameOrEmail] = useState<string>("");
    const [errorPassword, setErrorPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [passwordInputType, setPasswordInputType] = useState<string>(InputType.Password);

    const router = useRouter();
    const theme = useTheme();

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Route to feed page on submit button click on enter of valid username/email & password
        router.push("feed");
    };

    const handleUsernameOrEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setUsernameOrEmail(value);
        setErrorUsernameOrEmail(validateUsernameOrEmail(value));
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPassword(value);
        setErrorPassword(validatePassword(value));
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);

        if (showPassword) {
            setPasswordInputType(InputType.Text);
        } else {
            setPasswordInputType(InputType.Password);
        }
    }

    const _getTogglePasswordIcon = () => {
        return (
            <>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M2.41667 10C2.41667 9.19329 2.93513 7.70472 4.18608 6.40565C5.40721 5.13755 7.29888 4.08334 10 4.08334C12.7011 4.08334 14.5928 5.13755 15.8139 6.40565C17.0649 7.70472 17.5833 9.19329 17.5833 10C17.5833 10.8067 17.0649 12.2953 15.8139 13.5944C14.5928 14.8624 12.7011 15.9167 10 15.9167C7.29888 15.9167 5.40721 14.8624 4.18608 13.5944C2.93513 12.2953 2.41667 10.8067 2.41667 10ZM10 2.58334C6.8678 2.58334 4.5928 3.82078 3.1056 5.36519C1.64822 6.87862 0.916672 8.72338 0.916672 10C0.916672 11.2766 1.64822 13.1214 3.1056 14.6348C4.5928 16.1792 6.8678 17.4167 10 17.4167C13.1322 17.4167 15.4072 16.1792 16.8944 14.6348C18.3518 13.1214 19.0833 11.2766 19.0833 10C19.0833 8.72338 18.3518 6.87862 16.8944 5.36519C15.4072 3.82078 13.1322 2.58334 10 2.58334ZM8.24993 10C8.24993 9.0335 9.03343 8.25 9.99993 8.25C10.9664 8.25 11.7499 9.0335 11.7499 10C11.7499 10.9665 10.9664 11.75 9.99993 11.75C9.03343 11.75 8.24993 10.9665 8.24993 10ZM9.99993 6.75C8.205 6.75 6.74993 8.20508 6.74993 10C6.74993 11.7949 8.205 13.25 9.99993 13.25C11.7949 13.25 13.2499 11.7949 13.2499 10C13.2499 8.20508 11.7949 6.75 9.99993 6.75Z" fill="#7F8084" />
                </svg>
            </>
        );
    }

    const backgroundPrimaryColor = theme.components.page.colors.background.primary;
    const backgroundSecondaryColor = theme.components.page.colors.background.secondary;
    const textPrimaryColor = theme.components.page.colors.text.primary;
    const textSecondaryColor = theme.components.page.colors.text.secondary;
    const textTeriatryColor = theme.components.page.colors.text.teriatry;

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-theme-black ">
            <div className="mb-[49px]">
                <Logo />
            </div>
            <form className=" " onSubmit={submit}>
                <Card backgroundColor={backgroundSecondaryColor} border="2px solid #969696" borderRadius="8px" width="463px" height="420px" paddingY="38px" paddingX="24px" >
                    <div className="pb-[30px]">
                        <Text color="#6B6C70" fontWeight="500" size="sm" textAlign="center">WELCOME BACK</Text>
                        <Text color={textTeriatryColor} fontWeight="600" size="lg" textAlign="center" marginTop="8px">Log into your account</Text>
                    </div>
                    <Input
                        id="Username"
                        name="Username"
                        label="Email or Username"
                        placeholder="Enter your email or username"
                        value={usernameOrEmail}
                        onChange={handleUsernameOrEmailChange}
                        hasError={!!errorUsernameOrEmail.length}
                        errorMessage={errorUsernameOrEmail}
                        required={false}
                        type="text"
                        minLength={USERNAME_Or_Email_MIN_LENGTH}
                        maxLength={USERNAME_Or_Email_MAX_LENGTH}
                    />
                    <Input
                        id="Password"
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={handlePasswordChange}
                        hasError={!!errorPassword.length}
                        errorMessage={errorPassword}
                        required={false}
                        type={passwordInputType}
                        minLength={PASSWORD_MIN_LENGTH}
                        maxLength={PASSWORD_MAX_LENGTH}
                        icon={{
                            icon: _getTogglePasswordIcon,
                            onClick: togglePasswordVisibility,
                            style: {
                                size: "20px",
                                margin: "-30px 10px 0 0",
                                float: "right",
                                fontSize: "20px"
                            }
                        }}
                        helpOrInfoLink={{ text: "Forgot Password?", href: "/forgotPassword", style: { color: "#C5C7CA", textDecoration: "none", fontWeight: "500", size: "xs" } }}
                    />
                    <Button onClick={(e) => { }} disabled={!!(errorPassword || errorUsernameOrEmail)} type="submit" width="100%" height="43px" backGroundColor="#4A96FF" borderRadius="4px" padding="12px" margin="10px 0 10px 0">
                        <Text color="#FFF" fontWeight="500" size="md" textAlign="center" display="inline-block">
                            Login Now
                        </Text>
                    </Button>
                    <div className="block">
                        <Text color={textSecondaryColor} fontWeight="500" size="sm" textAlign="left" display="inline">Not registered yet? </Text>
                        <Text color={textPrimaryColor} fontWeight="500" size="sm" textAlign="left" display="inline">Register →</Text>
                    </div>
                </Card>
            </form>
        </div>
    );
};

export { Login };