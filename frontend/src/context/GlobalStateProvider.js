import { AuthProvider } from "./AuthContext";
import { ProfileProvider } from "./ProfileContext";
import { NotificationProvider } from "./NotificationContext";
import { ModalProvider } from "./ModalContext";
import { UploadProvider } from "./UploadContext";
import { AppointmentProvider } from "./AppointmentContext";
import { PrescriptionProvider } from "./PrescriptionContext";
import { DoctorProvider } from "./DoctorContext";
import { PatientProvider } from "./PatientContext";
import { AdminProvider } from "./AdminContext";

const GlobalStateProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ProfileProvider>
        <NotificationProvider>
          <ModalProvider>
            <UploadProvider>
              <AppointmentProvider>
                <PrescriptionProvider>
                  <DoctorProvider>
                    <PatientProvider>
                      <AdminProvider>
                        {children}
                      </AdminProvider>
                    </PatientProvider>
                  </DoctorProvider>
                </PrescriptionProvider>
              </AppointmentProvider>
            </UploadProvider>
          </ModalProvider>
        </NotificationProvider>
      </ProfileProvider>
    </AuthProvider>
  );
};

export default GlobalStateProvider;