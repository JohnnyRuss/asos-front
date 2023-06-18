interface UpdateRequestStatusReturnT {
  loading: boolean;
  error: boolean;
  message: string;
}

type UpdateRequestStatusT = (
  loading?: boolean,
  error?: boolean,
  message?: string
) => UpdateRequestStatusReturnT;

const updateRequestStatus: UpdateRequestStatusT = (
  loading = true,
  error = false,
  message = ""
): UpdateRequestStatusReturnT => ({
  loading,
  error,
  message,
});

export default updateRequestStatus;
