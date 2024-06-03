/* tslint:disable */
/* eslint-disable */
/**
 * FastAPI
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError, operationServerMap } from './base';

/**
 * 
 * @export
 * @interface BankAccountDto
 */
export interface BankAccountDto {
    /**
     * 
     * @type {string}
     * @memberof BankAccountDto
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof BankAccountDto
     */
    'bank_connection_id': string;
    /**
     * 
     * @type {BankConnectorDto}
     * @memberof BankAccountDto
     */
    'bank_connection': BankConnectorDto;
    /**
     * 
     * @type {string}
     * @memberof BankAccountDto
     */
    'provider': string;
    /**
     * 
     * @type {string}
     * @memberof BankAccountDto
     */
    'provider_account_id': string;
    /**
     * 
     * @type {string}
     * @memberof BankAccountDto
     */
    'type': string;
    /**
     * 
     * @type {boolean}
     * @memberof BankAccountDto
     */
    'enabled': boolean;
    /**
     * 
     * @type {string}
     * @memberof BankAccountDto
     */
    'number': string;
    /**
     * 
     * @type {number}
     * @memberof BankAccountDto
     */
    'balance': number;
    /**
     * 
     * @type {string}
     * @memberof BankAccountDto
     */
    'currency_code': string;
    /**
     * 
     * @type {string}
     * @memberof BankAccountDto
     */
    'name': string;
}
/**
 * 
 * @export
 * @interface BankConnectorDto
 */
export interface BankConnectorDto {
    /**
     * 
     * @type {string}
     * @memberof BankConnectorDto
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof BankConnectorDto
     */
    'provider': string;
    /**
     * 
     * @type {string}
     * @memberof BankConnectorDto
     */
    'provider_bank_connector_id': string;
    /**
     * 
     * @type {string}
     * @memberof BankConnectorDto
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof BankConnectorDto
     */
    'institution_url': string;
    /**
     * 
     * @type {string}
     * @memberof BankConnectorDto
     */
    'image_url': string;
    /**
     * 
     * @type {string}
     * @memberof BankConnectorDto
     */
    'primary_color': string;
    /**
     * 
     * @type {string}
     * @memberof BankConnectorDto
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof BankConnectorDto
     */
    'country': string;
}
/**
 * 
 * @export
 * @interface BankTransactionCreditCardMetadataDto
 */
export interface BankTransactionCreditCardMetadataDto {
    /**
     * 
     * @type {string}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'transaction_id': string;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'installment_number': number | null;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'total_installments': number | null;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'total_amount': number | null;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'payee_mcc': number | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'card_number': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'bill_id': string | null;
}
/**
 * 
 * @export
 * @interface BankTransactionDto
 */
export interface BankTransactionDto {
    /**
     * 
     * @type {BankAccountDto}
     * @memberof BankTransactionDto
     */
    'account': BankAccountDto;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'provider': string;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'workspace_id': string;
    /**
     * 
     * @type {WorkspaceDto}
     * @memberof BankTransactionDto
     */
    'workspace': WorkspaceDto;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'provider_transaction_id': string;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'original_description': string;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'posted_date': string;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionDto
     */
    'posted_day': number;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionDto
     */
    'posted_week': number;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionDto
     */
    'posted_month': number;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionDto
     */
    'posted_year': number;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'competency_date': string;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionDto
     */
    'competency_day': number;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionDto
     */
    'competency_week': number;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionDto
     */
    'competency_month': number;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionDto
     */
    'competency_year': number;
    /**
     * 
     * @type {number}
     * @memberof BankTransactionDto
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'provider_category_id': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'provider_category_name': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'payment_data_id': string | null;
    /**
     * 
     * @type {BankTransactionPaymentDataDto}
     * @memberof BankTransactionDto
     */
    'payment_data': BankTransactionPaymentDataDto | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'credit_card_metadata_id': string | null;
    /**
     * 
     * @type {BankTransactionCreditCardMetadataDto}
     * @memberof BankTransactionDto
     */
    'credit_card_metadata': BankTransactionCreditCardMetadataDto | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionDto
     */
    'legal_nature': string;
}
/**
 * 
 * @export
 * @interface BankTransactionPaymentDataDto
 */
export interface BankTransactionPaymentDataDto {
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_name': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_branch_number': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_account_number': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_routing_number': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_routing_number_ispb': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_document_number_type': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_document_number_value': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'reason': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_name': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_branch_number': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_account_number': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_routing_number': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_routing_number_ispb': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_document_number_type': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_document_number_value': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payment_method': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'reference_number': string | null;
    /**
     * 
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_reference_id': string | null;
}
/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    'detail'?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface HelloEntity
 */
export interface HelloEntity {
    /**
     * 
     * @type {string}
     * @memberof HelloEntity
     */
    'message': string;
}
/**
 * 
 * @export
 * @interface HybridWorkspaceSettingsDto
 */
export interface HybridWorkspaceSettingsDto {
    /**
     * 
     * @type {string}
     * @memberof HybridWorkspaceSettingsDto
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof HybridWorkspaceSettingsDto
     */
    'business_segment': string;
    /**
     * 
     * @type {string}
     * @memberof HybridWorkspaceSettingsDto
     */
    'other_business_description': string | null;
}
/**
 * 
 * @export
 * @enum {string}
 */

export const LegalNature = {
    Personal: 'PERSONAL',
    Business: 'BUSINESS'
} as const;

export type LegalNature = typeof LegalNature[keyof typeof LegalNature];


/**
 * 
 * @export
 * @interface PredictBankTransactionCategoryRequestDto
 */
export interface PredictBankTransactionCategoryRequestDto {
    /**
     * 
     * @type {BankTransactionDto}
     * @memberof PredictBankTransactionCategoryRequestDto
     */
    'transaction': BankTransactionDto;
}
/**
 * 
 * @export
 * @interface PredictBankTransactionCategoryResponseDto
 */
export interface PredictBankTransactionCategoryResponseDto {
    /**
     * 
     * @type {string}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'first_most_probable_category_id': string;
    /**
     * 
     * @type {string}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'first_most_probable_category_name': string;
    /**
     * 
     * @type {number}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'first_most_probable_category_score': number;
    /**
     * 
     * @type {string}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'second_most_probable_category_id': string;
    /**
     * 
     * @type {string}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'second_most_probable_category_name': string;
    /**
     * 
     * @type {number}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'second_most_probable_category_score': number;
    /**
     * 
     * @type {string}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'third_most_probable_category_id': string;
    /**
     * 
     * @type {string}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'third_most_probable_category_name': string;
    /**
     * 
     * @type {number}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'third_most_probable_category_score': number;
    /**
     * 
     * @type {string}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'fourth_most_probable_category_id': string;
    /**
     * 
     * @type {string}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'fourth_most_probable_category_name': string;
    /**
     * 
     * @type {number}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'fourth_most_probable_category_score': number;
    /**
     * 
     * @type {string}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'fifth_most_probable_category_id': string;
    /**
     * 
     * @type {string}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'fifth_most_probable_category_name': string;
    /**
     * 
     * @type {number}
     * @memberof PredictBankTransactionCategoryResponseDto
     */
    'fifth_most_probable_category_score': number;
}
/**
 * 
 * @export
 * @interface PredictLegalNatureBankTransactionDto
 */
export interface PredictLegalNatureBankTransactionDto {
    /**
     * 
     * @type {BankAccountDto}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'account': BankAccountDto;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'provider': string;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'workspace_id': string;
    /**
     * 
     * @type {WorkspaceDto}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'workspace': WorkspaceDto;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'provider_transaction_id': string;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'original_description': string;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'posted_date': string;
    /**
     * 
     * @type {number}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'posted_day': number;
    /**
     * 
     * @type {number}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'posted_week': number;
    /**
     * 
     * @type {number}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'posted_month': number;
    /**
     * 
     * @type {number}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'posted_year': number;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'competency_date': string;
    /**
     * 
     * @type {number}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'competency_day': number;
    /**
     * 
     * @type {number}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'competency_week': number;
    /**
     * 
     * @type {number}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'competency_month': number;
    /**
     * 
     * @type {number}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'competency_year': number;
    /**
     * 
     * @type {number}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'amount': number;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'type': string;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'status': string;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'provider_category_id': string | null;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'provider_category_name': string | null;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'payment_data_id': string | null;
    /**
     * 
     * @type {BankTransactionPaymentDataDto}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'payment_data': BankTransactionPaymentDataDto | null;
    /**
     * 
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'credit_card_metadata_id': string | null;
    /**
     * 
     * @type {BankTransactionCreditCardMetadataDto}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'credit_card_metadata': BankTransactionCreditCardMetadataDto | null;
}
/**
 * 
 * @export
 * @interface PredictLegalNatureRequestDto
 */
export interface PredictLegalNatureRequestDto {
    /**
     * 
     * @type {PredictLegalNatureBankTransactionDto}
     * @memberof PredictLegalNatureRequestDto
     */
    'transaction': PredictLegalNatureBankTransactionDto;
}
/**
 * 
 * @export
 * @interface PredictLegalNatureResponseDto
 */
export interface PredictLegalNatureResponseDto {
    /**
     * 
     * @type {LegalNature}
     * @memberof PredictLegalNatureResponseDto
     */
    'legal_nature': LegalNature;
    /**
     * 
     * @type {number}
     * @memberof PredictLegalNatureResponseDto
     */
    'score': number;
}


/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<ValidationErrorLocInner>}
     * @memberof ValidationError
     */
    'loc': Array<ValidationErrorLocInner>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'msg': string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'type': string;
}
/**
 * 
 * @export
 * @interface ValidationErrorLocInner
 */
export interface ValidationErrorLocInner {
}
/**
 * 
 * @export
 * @interface WorkspaceDto
 */
export interface WorkspaceDto {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceDto
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceDto
     */
    'pretty_id': string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceDto
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceDto
     */
    'type': string;
    /**
     * 
     * @type {HybridWorkspaceSettingsDto}
     * @memberof WorkspaceDto
     */
    'hybrid_settings': HybridWorkspaceSettingsDto | null;
}

/**
 * BankTransactionCategoryApi - axios parameter creator
 * @export
 */
export const BankTransactionCategoryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Predict Bank Transaction Category
         * @param {PredictBankTransactionCategoryRequestDto} predictBankTransactionCategoryRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictBankTransactionCategoryPredictBankTransactionCategoryPost: async (predictBankTransactionCategoryRequestDto: PredictBankTransactionCategoryRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'predictBankTransactionCategoryRequestDto' is not null or undefined
            assertParamExists('predictBankTransactionCategoryPredictBankTransactionCategoryPost', 'predictBankTransactionCategoryRequestDto', predictBankTransactionCategoryRequestDto)
            const localVarPath = `/predict/bank-transaction-category`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(predictBankTransactionCategoryRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BankTransactionCategoryApi - functional programming interface
 * @export
 */
export const BankTransactionCategoryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BankTransactionCategoryApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Predict Bank Transaction Category
         * @param {PredictBankTransactionCategoryRequestDto} predictBankTransactionCategoryRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async predictBankTransactionCategoryPredictBankTransactionCategoryPost(predictBankTransactionCategoryRequestDto: PredictBankTransactionCategoryRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PredictBankTransactionCategoryResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.predictBankTransactionCategoryPredictBankTransactionCategoryPost(predictBankTransactionCategoryRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BankTransactionCategoryApi.predictBankTransactionCategoryPredictBankTransactionCategoryPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * BankTransactionCategoryApi - factory interface
 * @export
 */
export const BankTransactionCategoryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BankTransactionCategoryApiFp(configuration)
    return {
        /**
         * 
         * @summary Predict Bank Transaction Category
         * @param {PredictBankTransactionCategoryRequestDto} predictBankTransactionCategoryRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictBankTransactionCategoryPredictBankTransactionCategoryPost(predictBankTransactionCategoryRequestDto: PredictBankTransactionCategoryRequestDto, options?: any): AxiosPromise<PredictBankTransactionCategoryResponseDto> {
            return localVarFp.predictBankTransactionCategoryPredictBankTransactionCategoryPost(predictBankTransactionCategoryRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BankTransactionCategoryApi - object-oriented interface
 * @export
 * @class BankTransactionCategoryApi
 * @extends {BaseAPI}
 */
export class BankTransactionCategoryApi extends BaseAPI {
    /**
     * 
     * @summary Predict Bank Transaction Category
     * @param {PredictBankTransactionCategoryRequestDto} predictBankTransactionCategoryRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankTransactionCategoryApi
     */
    public predictBankTransactionCategoryPredictBankTransactionCategoryPost(predictBankTransactionCategoryRequestDto: PredictBankTransactionCategoryRequestDto, options?: RawAxiosRequestConfig) {
        return BankTransactionCategoryApiFp(this.configuration).predictBankTransactionCategoryPredictBankTransactionCategoryPost(predictBankTransactionCategoryRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * HelloApi - axios parameter creator
 * @export
 */
export const HelloApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Hello
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHelloHelloGet: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/hello`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HelloApi - functional programming interface
 * @export
 */
export const HelloApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HelloApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Hello
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHelloHelloGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HelloEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getHelloHelloGet(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['HelloApi.getHelloHelloGet']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * HelloApi - factory interface
 * @export
 */
export const HelloApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HelloApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Hello
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHelloHelloGet(options?: any): AxiosPromise<HelloEntity> {
            return localVarFp.getHelloHelloGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HelloApi - object-oriented interface
 * @export
 * @class HelloApi
 * @extends {BaseAPI}
 */
export class HelloApi extends BaseAPI {
    /**
     * 
     * @summary Get Hello
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HelloApi
     */
    public getHelloHelloGet(options?: RawAxiosRequestConfig) {
        return HelloApiFp(this.configuration).getHelloHelloGet(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * LegalNatureApi - axios parameter creator
 * @export
 */
export const LegalNatureApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Predict Legal Nature
         * @param {PredictLegalNatureRequestDto} predictLegalNatureRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictLegalNaturePredictLegalNaturePost: async (predictLegalNatureRequestDto: PredictLegalNatureRequestDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'predictLegalNatureRequestDto' is not null or undefined
            assertParamExists('predictLegalNaturePredictLegalNaturePost', 'predictLegalNatureRequestDto', predictLegalNatureRequestDto)
            const localVarPath = `/predict/legal-nature`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(predictLegalNatureRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LegalNatureApi - functional programming interface
 * @export
 */
export const LegalNatureApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LegalNatureApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Predict Legal Nature
         * @param {PredictLegalNatureRequestDto} predictLegalNatureRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async predictLegalNaturePredictLegalNaturePost(predictLegalNatureRequestDto: PredictLegalNatureRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PredictLegalNatureResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.predictLegalNaturePredictLegalNaturePost(predictLegalNatureRequestDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LegalNatureApi.predictLegalNaturePredictLegalNaturePost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LegalNatureApi - factory interface
 * @export
 */
export const LegalNatureApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LegalNatureApiFp(configuration)
    return {
        /**
         * 
         * @summary Predict Legal Nature
         * @param {PredictLegalNatureRequestDto} predictLegalNatureRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        predictLegalNaturePredictLegalNaturePost(predictLegalNatureRequestDto: PredictLegalNatureRequestDto, options?: any): AxiosPromise<PredictLegalNatureResponseDto> {
            return localVarFp.predictLegalNaturePredictLegalNaturePost(predictLegalNatureRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LegalNatureApi - object-oriented interface
 * @export
 * @class LegalNatureApi
 * @extends {BaseAPI}
 */
export class LegalNatureApi extends BaseAPI {
    /**
     * 
     * @summary Predict Legal Nature
     * @param {PredictLegalNatureRequestDto} predictLegalNatureRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LegalNatureApi
     */
    public predictLegalNaturePredictLegalNaturePost(predictLegalNatureRequestDto: PredictLegalNatureRequestDto, options?: RawAxiosRequestConfig) {
        return LegalNatureApiFp(this.configuration).predictLegalNaturePredictLegalNaturePost(predictLegalNatureRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}



