# gRPC Status Codes

| Code | Number | Description |
|------|--------|-------------|
| `OK` | 0 | The operation completed successfully. |
| `CANCELLED` | 1 | The operation was cancelled, typically by the caller. |
| `UNKNOWN` | 2 | Unknown error. Returned when no more specific error can be determined. |
| `INVALID_ARGUMENT` | 3 | The client specified an invalid argument. |
| `DEADLINE_EXCEEDED` | 4 | The deadline expired before the operation could complete. |
| `NOT_FOUND` | 5 | Some requested entity was not found. |
| `ALREADY_EXISTS` | 6 | The entity that a client attempted to create already exists. |
| `PERMISSION_DENIED` | 7 | The caller does not have permission to execute the specified operation. |
| `RESOURCE_EXHAUSTED` | 8 | Some resource has been exhausted (e.g. quota, rate limit). |
| `FAILED_PRECONDITION` | 9 | The operation was rejected because the system is not in the required state. |
| `ABORTED` | 10 | The operation was aborted, typically due to a concurrency issue. |
| `OUT_OF_RANGE` | 11 | The operation was attempted past the valid range. |
| `UNIMPLEMENTED` | 12 | The operation is not implemented or not supported. |
| `INTERNAL` | 13 | Internal error. Some invariant expected by the server was broken. |
| `UNAVAILABLE` | 14 | The service is currently unavailable. Typically a transient condition. |
| `DATA_LOSS` | 15 | Unrecoverable data loss or corruption. |
| `UNAUTHENTICATED` | 16 | The request does not have valid authentication credentials. |

---

## Common Use Cases

| Scenario | Recommended Code |
|----------|-----------------|
| Success | `OK` (0) |
| Input validation failed | `INVALID_ARGUMENT` (3) |
| Resource not found | `NOT_FOUND` (5) |
| Duplicate resource | `ALREADY_EXISTS` (6) |
| No permission | `PERMISSION_DENIED` (7) |
| Not logged in / bad token | `UNAUTHENTICATED` (16) |
| Rate limit hit | `RESOURCE_EXHAUSTED` (8) |
| Method not implemented | `UNIMPLEMENTED` (12) |
| Server-side error | `INTERNAL` (13) |
| Service down | `UNAVAILABLE` (14) |
| Request timed out | `DEADLINE_EXCEEDED` (4) |
| Concurrent write conflict | `ABORTED` (10) |

---

## NestJS Usage

```typescript
import { RpcException } from '@nestjs/microservices';
import { status } from '@grpc/grpc-js';

throw new RpcException({
  code: status.NOT_FOUND,
  message: 'User not found',
});
```

## References

- [gRPC Status Codes (official)](https://grpc.github.io/grpc/core/md_doc_statuscodes.html)
- [@grpc/grpc-js status enum](https://grpc.github.io/grpc/node/grpc.html#.status__anchor)
