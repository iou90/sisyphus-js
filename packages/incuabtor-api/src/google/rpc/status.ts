import * as $any from "../protobuf/any"
import * as $protobuf from "protobufjs"
import * as $reflection from "../../_reflection"


/**
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 *
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export interface IStatus {
    /** The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code]. */
    code?: number
    /**
     * A developer-facing error message, which should be in English. Any
     * user-facing error message should be localized and sent in the
     * [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
     */
    message?: string
    /**
     * A list of messages that carry the error details.  There is a common set of
     * message types for APIs to use.
     */
    details?: readonly $any.IAny[]
}

export class Status extends $protobuf.Message<Status> implements IStatus {
    code!: number
    message!: string
    details!: readonly $any.Any[]

    get $type() {
        return Status.$type
    }

    static readonly $type = $reflection.root.lookupType(".google.rpc.Status")
}

Status.$type.generatedObject = Status
Status.prototype.code = Status.$type.fieldsById[1].defaultValue
Status.prototype.message = Status.$type.fieldsById[2].defaultValue
Status.prototype.details = Status.$type.fieldsById[3].defaultValue