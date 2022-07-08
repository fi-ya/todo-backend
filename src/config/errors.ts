import { RuntimeException } from '@nestjs/core/errors/exceptions/runtime.exception';

export class EnvVarNotFound extends RuntimeException {}
