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
import type { RequestArgs } from './base';
import { BaseAPI } from './base';
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
     * @type {BankConnectionDto}
     * @memberof BankAccountDto
     */
    'bank_connection': BankConnectionDto;
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
 * @interface BankConnectionDto
 */
export interface BankConnectionDto {
    /**
     *
     * @type {string}
     * @memberof BankConnectionDto
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof BankConnectionDto
     */
    'created_by_user_id': string;
    /**
     *
     * @type {UserDto}
     * @memberof BankConnectionDto
     */
    'create_by_user': UserDto;
    /**
     *
     * @type {string}
     * @memberof BankConnectionDto
     */
    'workspace_id': string;
    /**
     *
     * @type {boolean}
     * @memberof BankConnectionDto
     */
    'enabled': boolean;
    /**
     *
     * @type {string}
     * @memberof BankConnectionDto
     */
    'history_range': string;
    /**
     *
     * @type {string}
     * @memberof BankConnectionDto
     */
    'provider': string;
    /**
     *
     * @type {string}
     * @memberof BankConnectionDto
     */
    'provider_item_id': string;
    /**
     *
     * @type {string}
     * @memberof BankConnectionDto
     */
    'connector_id': string;
    /**
     *
     * @type {BankConnectorDto}
     * @memberof BankConnectionDto
     */
    'connector': BankConnectorDto;
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
     * @type {number}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'installment_number'?: number | null;
    /**
     *
     * @type {number}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'total_installments'?: number | null;
    /**
     *
     * @type {number}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'total_amount'?: number | null;
    /**
     *
     * @type {number}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'payee_mcc'?: number | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'card_number'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionCreditCardMetadataDto
     */
    'bill_id'?: string | null;
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
     * @type {string}
     * @memberof BankTransactionDto
     */
    'competency_date': string;
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
    'provider_category_id'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionDto
     */
    'provider_category_name'?: string | null;
    /**
     *
     * @type {BankTransactionPaymentDataDto}
     * @memberof BankTransactionDto
     */
    'payment_data'?: BankTransactionPaymentDataDto | null;
    /**
     *
     * @type {BankTransactionCreditCardMetadataDto}
     * @memberof BankTransactionDto
     */
    'credit_card_metadata'?: BankTransactionCreditCardMetadataDto | null;
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
    'payer_name'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_branch_number'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_account_number'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_routing_number'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_routing_number_ispb'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_document_number_type'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payer_document_number_value'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'reason'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_name'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_branch_number'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_account_number'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_routing_number'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_routing_number_ispb'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_document_number_type'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_document_number_value'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'payment_method'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'reference_number'?: string | null;
    /**
     *
     * @type {string}
     * @memberof BankTransactionPaymentDataDto
     */
    'receiver_reference_id'?: string | null;
}
/**
 *
 * @export
 * @interface CompanyWorkspaceSettingsDto
 */
export interface CompanyWorkspaceSettingsDto {
    /**
     *
     * @type {string}
     * @memberof CompanyWorkspaceSettingsDto
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof CompanyWorkspaceSettingsDto
     */
    'business_segment': string;
    /**
     *
     * @type {string}
     * @memberof CompanyWorkspaceSettingsDto
     */
    'other_business_description'?: string | null;
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
    'other_business_description'?: string | null;
}
/**
 *
 * @export
 * @enum {string}
 */
export declare const LegalNature: {
    readonly Personal: "PERSONAL";
    readonly Business: "BUSINESS";
};
export type LegalNature = typeof LegalNature[keyof typeof LegalNature];
/**
 *
 * @export
 * @interface PersonalWorkspaceSettingsDto
 */
export interface PersonalWorkspaceSettingsDto {
    /**
     *
     * @type {string}
     * @memberof PersonalWorkspaceSettingsDto
     */
    'id': string;
}
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
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'competency_date': string;
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
    'provider_category_id'?: string | null;
    /**
     *
     * @type {string}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'provider_category_name'?: string | null;
    /**
     *
     * @type {BankTransactionPaymentDataDto}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'payment_data'?: BankTransactionPaymentDataDto | null;
    /**
     *
     * @type {BankTransactionCreditCardMetadataDto}
     * @memberof PredictLegalNatureBankTransactionDto
     */
    'credit_card_metadata'?: BankTransactionCreditCardMetadataDto | null;
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
 * @interface ProfileDto
 */
export interface ProfileDto {
    /**
     *
     * @type {string}
     * @memberof ProfileDto
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof ProfileDto
     */
    'full_name': string;
    /**
     *
     * @type {string}
     * @memberof ProfileDto
     */
    'phone': string;
    /**
     *
     * @type {string}
     * @memberof ProfileDto
     */
    'birth_date': string;
}
/**
 *
 * @export
 * @interface UserDto
 */
export interface UserDto {
    /**
     *
     * @type {string}
     * @memberof UserDto
     */
    'id': string;
    /**
     *
     * @type {string}
     * @memberof UserDto
     */
    'email': string;
    /**
     *
     * @type {ProfileDto}
     * @memberof UserDto
     */
    'profile': ProfileDto;
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
    'hybrid_settings'?: HybridWorkspaceSettingsDto | null;
    /**
     *
     * @type {CompanyWorkspaceSettingsDto}
     * @memberof WorkspaceDto
     */
    'company_settings'?: CompanyWorkspaceSettingsDto | null;
    /**
     *
     * @type {PersonalWorkspaceSettingsDto}
     * @memberof WorkspaceDto
     */
    'personal_settings'?: PersonalWorkspaceSettingsDto | null;
}
/**
 * BankTransactionCategoryApi - axios parameter creator
 * @export
 */
export declare const BankTransactionCategoryApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Predict Bank Transaction Category
     * @param {PredictBankTransactionCategoryRequestDto} predictBankTransactionCategoryRequestDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    predictBankTransactionCategoryPredictBankTransactionCategoryPost: (predictBankTransactionCategoryRequestDto: PredictBankTransactionCategoryRequestDto, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * BankTransactionCategoryApi - functional programming interface
 * @export
 */
export declare const BankTransactionCategoryApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Predict Bank Transaction Category
     * @param {PredictBankTransactionCategoryRequestDto} predictBankTransactionCategoryRequestDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    predictBankTransactionCategoryPredictBankTransactionCategoryPost(predictBankTransactionCategoryRequestDto: PredictBankTransactionCategoryRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PredictBankTransactionCategoryResponseDto>>;
};
/**
 * BankTransactionCategoryApi - factory interface
 * @export
 */
export declare const BankTransactionCategoryApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Predict Bank Transaction Category
     * @param {PredictBankTransactionCategoryRequestDto} predictBankTransactionCategoryRequestDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    predictBankTransactionCategoryPredictBankTransactionCategoryPost(predictBankTransactionCategoryRequestDto: PredictBankTransactionCategoryRequestDto, options?: any): AxiosPromise<PredictBankTransactionCategoryResponseDto>;
};
/**
 * BankTransactionCategoryApi - object-oriented interface
 * @export
 * @class BankTransactionCategoryApi
 * @extends {BaseAPI}
 */
export declare class BankTransactionCategoryApi extends BaseAPI {
    /**
     *
     * @summary Predict Bank Transaction Category
     * @param {PredictBankTransactionCategoryRequestDto} predictBankTransactionCategoryRequestDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BankTransactionCategoryApi
     */
    predictBankTransactionCategoryPredictBankTransactionCategoryPost(predictBankTransactionCategoryRequestDto: PredictBankTransactionCategoryRequestDto, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PredictBankTransactionCategoryResponseDto, any>>;
}
/**
 * HelloApi - axios parameter creator
 * @export
 */
export declare const HelloApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Hello
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHelloHelloGet: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * HelloApi - functional programming interface
 * @export
 */
export declare const HelloApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Get Hello
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHelloHelloGet(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HelloEntity>>;
};
/**
 * HelloApi - factory interface
 * @export
 */
export declare const HelloApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Get Hello
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getHelloHelloGet(options?: any): AxiosPromise<HelloEntity>;
};
/**
 * HelloApi - object-oriented interface
 * @export
 * @class HelloApi
 * @extends {BaseAPI}
 */
export declare class HelloApi extends BaseAPI {
    /**
     *
     * @summary Get Hello
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HelloApi
     */
    getHelloHelloGet(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<HelloEntity, any>>;
}
/**
 * LegalNatureApi - axios parameter creator
 * @export
 */
export declare const LegalNatureApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     *
     * @summary Predict Legal Nature
     * @param {PredictLegalNatureRequestDto} predictLegalNatureRequestDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    predictLegalNaturePredictLegalNaturePost: (predictLegalNatureRequestDto: PredictLegalNatureRequestDto, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * LegalNatureApi - functional programming interface
 * @export
 */
export declare const LegalNatureApiFp: (configuration?: Configuration) => {
    /**
     *
     * @summary Predict Legal Nature
     * @param {PredictLegalNatureRequestDto} predictLegalNatureRequestDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    predictLegalNaturePredictLegalNaturePost(predictLegalNatureRequestDto: PredictLegalNatureRequestDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PredictLegalNatureResponseDto>>;
};
/**
 * LegalNatureApi - factory interface
 * @export
 */
export declare const LegalNatureApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     *
     * @summary Predict Legal Nature
     * @param {PredictLegalNatureRequestDto} predictLegalNatureRequestDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    predictLegalNaturePredictLegalNaturePost(predictLegalNatureRequestDto: PredictLegalNatureRequestDto, options?: any): AxiosPromise<PredictLegalNatureResponseDto>;
};
/**
 * LegalNatureApi - object-oriented interface
 * @export
 * @class LegalNatureApi
 * @extends {BaseAPI}
 */
export declare class LegalNatureApi extends BaseAPI {
    /**
     *
     * @summary Predict Legal Nature
     * @param {PredictLegalNatureRequestDto} predictLegalNatureRequestDto
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LegalNatureApi
     */
    predictLegalNaturePredictLegalNaturePost(predictLegalNatureRequestDto: PredictLegalNatureRequestDto, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PredictLegalNatureResponseDto, any>>;
}
