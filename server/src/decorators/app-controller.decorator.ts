import { applyDecorators, ClassSerializerInterceptor, Controller, UseInterceptors } from '@nestjs/common'
import { ApiInternalServerErrorResponse, ApiTags } from '@nestjs/swagger'

export const AppController = (
	prefix: string | string[],
	tags?: string | string[],
): ClassDecorator =>
	applyDecorators(
		Controller(prefix),
		UseInterceptors(ClassSerializerInterceptor),
		ApiTags(
			...(typeof tags === 'string'
				? [tags]
				: tags ?? (typeof prefix === 'string' ? [prefix] : prefix)),
		),
		// can always return 500 if we don't treat exceptions...
		ApiInternalServerErrorResponse({ description: 'Internal server error' }),
	)
