const options = {
    mongodb: {
        url: "mongodb://localhost:27017/ecommerce",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        }
    },
    file: {
        productsPath: "./data/products.json",
        cartPath: "./data/cart.json"
    },
    firestore: {
        config: {
            "type": "service_account",
            "project_id": "ecommerce-2689a",
            "private_key_id": "4ac709051bfc1aa349387fe3021de9a1d807563d",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDPIia3IR3YucMy\nlUOFNEevUx7DkvbpHZBigHJtnOgcaXshpX1/9xY+/HFnKGgUIi+H61KSfOel9a1A\nnaQ0xZ7KA1AQgnNY2SyHt6N4F91V0TNGEACSm3Qn0VlhkkkddEI+K+GgACyg5lR2\nAAEbs2RnyTGQvs+wecsm0pbokb0A0XCd8yqX4wTRuXLUHZpRb0WAPjUAXyn/XgkX\nLXIHy+WMF9CNm6JUfdCC5pHAcGAI10yXIURPQmHLGVYOeota9YExxCnj9Qrdwgpt\nNVuIbGHWZTtDjuC0ywv6mF4kmlFn74AYBJQsfm0Z+MqC3I/l1acIrRNN2as6taAz\nEhh8Taf1AgMBAAECggEAC2eC9YRCQ24pkX28Y6Ihlu/0T/+lzpH3zXnq/Z6s/PDQ\nfGVt3SolNGnryH/mCG3AFjNeWX29DLB+eIH1dN5d7sYd62VzT7StX0+SFYj4K8MX\n7UdGRiF+/2ORu0M1pASEUoNR/zWN6idPBoGGOMM4x6oWgN9bSgklUUmOUNcYA+pq\nyxmuNgvsG6sOwSNv6vFEhHU2RZdYWbLVZQ4rVY3eq0afwNXGyXqVpmtSgmIoj+q3\nAh2KviUmKsJzsenMcrueuQu7eBZKo0JBGMvmeu8mC80hCSfE8oLlm+jWT23KBTHd\nlk2t0mUmTyqFD5SaW+s0ZA3KsS5AsspzBwc1F9ek4QKBgQDnGM54eyV+41CUB1cX\nIwmicJFUYUWyPwswuhXbadnDXsEeiWsmxSocUtYnueLrj2fMDUlHtv+QUzP+4lSx\nONZCxaz4iFiALTVhUTnjBhS8YKrXUAS4j6ioeuJeqy/aa01sAxNd1HHPzcCnQI/Q\nuzc3CdIqVmhkLZqe2CyXWtKBGQKBgQDldEWLs7q+ye5i0XHAJR0MoEK2eCc2Q6Ic\nIDQOxfgTw7mqCal5UZm4IwkWisALQTnZEYy43NnFY+Ro3A+kynNUsxmLeSRyvdL9\nsrKEiNk4awa9p8Iyk/bjwsuGzGSdgxv0/r2Z8rcrBvavWSslVxwiJgE9Ru45PLNL\nOWSV1/+tPQKBgEZNTJpoVBrKyjuOFBdsyESLXBrAULSN6ziSk42hIOcHT1ab1WYA\n+vOM26tQKFEi2h/ANvfDGvHr7dhvP/Z95OiBPEKLL+kmV6PYUvTWZ7565d4EcLs4\nsMU4RN8p0q/ujqn6MY0M0Oa3oBEBWf7UxVJQAYhxquY23V/PQZl1vq4ZAoGAX+ZT\ntsrcjycYskZ1c2hPltpYZ6kaQmzMEVNITrBhOemA7Ndy9JitVa+W+cvt7gZJ5jaW\niSENB5nzefwXsblHsKvWTlvIZwh9ablJMWl82D6rJ5M48Ci1dIYSyHkeyFJm2eOq\nXPB7q8kSS0FKbiXVRVR7CiBeKp/7E8KeDp6jZsUCgYEA0JMv81HJmsEBCe5N3U7I\nKjJ8UtzqXmSiPSbA34WFTu9qsgSvCRFLypU7UY/luqM5wChrKYA8dbR9xEZWp0Tr\nq2VM3Vwo+yuYGoT6TWx2+N1kci2QVwiX5mE+3u7yToPGHUnYZMIL9owtkUBrOoyg\n0Bczls+gvS0r9a3R/AidNIQ=\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-2tp4d@ecommerce-2689a.iam.gserviceaccount.com",
            "client_id": "108205288092047115274",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-2tp4d%40ecommerce-2689a.iam.gserviceaccount.com"
        }

    }
}

module.exports = options;